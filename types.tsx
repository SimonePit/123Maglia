/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type DataInputCalcola={
  idCM:string
  CampioneFerri :string
  NrPuntiCampione:string
  NrFerriCampione:string
  MisuraTorace:string
  MisuraAltezza:string
  MisuraSpalle:string
  MisuraManica:string
}
export type DataOutputCalcola={
        id: number
        Torace: number,
        ToraceDavanti: number,
        ToraceDietro: number,
        Spalle: number,
        PuntiCalareScalfo: number,
        PuntiCalareScalfoDx: number,
        PuntiCalareScalfoSx: number,
        Scollo: number,
        GiroManica: number,
        InclinaturaSpalle: number,
}

export type RootStackParamList = {
  SignUp:undefined;
  Registration:undefined;
  Root: NavigatorScreenParams<RootTabParamList> | undefined;
  Modal: undefined;
  NotFound: undefined;
  StackCalculation:undefined;
};
export type CalculationStackParamList = {
  InserisciModello:undefined;
  Calculation:{idCM:number}
};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> = NativeStackScreenProps<
  RootStackParamList,
  Screen
>;
export type CalculationStackScreenProps<Screen extends keyof CalculationStackParamList> = NativeStackScreenProps<
  CalculationStackParamList,
  Screen
>;
export type RootTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type RootTabScreenProps<Screen extends keyof RootTabParamList> = CompositeScreenProps<
  BottomTabScreenProps<RootTabParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
