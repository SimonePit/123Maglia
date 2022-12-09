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
  inCampioneFerri :string
  inNrPuntiCampione:string
  inPuntiCampioneCm:string
  inNrFerriCampione:string
  inFerriCampioneCm:string
  inMisuraTorace:string
  inMisuraAltezza:string
  inMisuraSpalle:string
  inMisuraManica:string
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
        StrPuntiCalareScalfoLato: string,
        ScolloCentrale: number,
        ScolloLaterale: number,
        GiroManica: number,
        InclinaturaSpalleCentrale: number,
        InclinaturaSpalleLaterale: number,
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
  Calculation:{idCM:number}
  OutputCalculation:{
                    Torace: number,
                    ToraceDavanti: number,
                    ToraceDietro: number,
                    Spalle: number,
                    PuntiCalareScalfo: number,
                    PuntiCalareScalfoDx: number,
                    PuntiCalareScalfoSx: number,
                    StrPuntiCalareScalfoLato:string,
                    ScolloCentrale: number,
                    ScolloLaterale: number,
                    GiroManica: number,
                    InclinaturaSpalleCentrale: number,
                    InclinaturaSpalleLaterale: number,
                  }
  InserisciModello:undefined;
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
