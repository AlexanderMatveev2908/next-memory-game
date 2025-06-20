"use client";

import { type FC } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Btn from "@/shared/components/buttons/Btn/Btn";
import {
  OptGameFormType,
  schemaOptUserChoice,
} from "@/features/OptGame/paperwork/schema";
import { fieldsOptUserChoice } from "@/features/OptGame/uiFactory/forms";
import RowChoice from "./fragments/RowChoiceUser/RowChoice";
import { useDispatch } from "react-redux";
import { optGameSlice } from "@/features/OptGame/slices/optGameSlice";
import { saveStorage } from "@/core/lib/storage";
import { CardFormStyled } from "./Styled";
import { initGame } from "@/features/Game/lib";
import {
  defStateGame,
  gameSlice,
  StateGameType,
} from "@/features/Game/slices/gameSlice";

const CardForm: FC = () => {
  const formCtx = useForm<OptGameFormType>({
    mode: "all",
    resolver: zodResolver(schemaOptUserChoice),
  });

  const {
    watch,
    formState: { isDirty, dirtyFields },
    handleSubmit,
  } = formCtx;
  const vals = watch();
  const isValid =
    isDirty &&
    Object.entries(vals).every(
      ([key, val]) =>
        Object.keys(dirtyFields).includes(key) && !!val?.trim()?.length
    );

  const dispatch = useDispatch();

  const handleSave = handleSubmit(
    (data) => {
      dispatch(optGameSlice.actions.setOpt(data));
      saveStorage("optGame", data);

      const gameBoard = initGame(data);
      const gameState: StateGameType = {
        ...defStateGame,
        gameBoard,
        timer: {
          ...defStateGame.timer,
          run: true,
        },
      };
      dispatch(
        gameSlice.actions.initGame({
          gameBoard: gameBoard,
        })
      );
      saveStorage("game", gameState);
    },
    (errs) => {
      console.log(errs);
    }
  );

  // useEffect(() => {
  //   const formData: OptGameFormType =
  //     getStorage<OptGameFormType>("optGame") ??
  //     (initStateOptGame as NonNullable<OptGameFormType>);

  //   for (const k in formData) {
  //     setValue(
  //       k as keyof OptGameFormType,
  //       formData[k as keyof typeof formData],
  //       { shouldValidate: true, shouldDirty: true, shouldTouch: true }
  //     );
  //   }
  // }, [setValue]);

  return (
    <CardFormStyled onSubmit={handleSave} className="w-full grid grid-cols-1">
      <FormProvider {...formCtx}>
        <div className="choices w-full grid grid-cols-1">
          {fieldsOptUserChoice.map((el) => (
            <RowChoice key={el.id} {...{ el }} />
          ))}
        </div>

        <div className="wrap__submit_btn w-full flex">
          <Btn
            {...{
              label: "Start Game",
              type: "submit",
              $fsz: "var(--h__sm)",
              $fsz_md: "var(--h__lg)",
              $hoverOpc: "0.7",
              isDisabled: !isValid,
            }}
          />
        </div>
      </FormProvider>
    </CardFormStyled>
  );
};

export default CardForm;
