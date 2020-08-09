import { GET_TABLE_DATA } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_TABLE_DATA:
      return {
        ...state,
        tableData: action.payload,
        tableHeaders: action.payload.headers,
        trLoadOnMsc: action.payload.trLoadOnMsc,
        trLoadOnMscRecom: action.payload.trLoadOnMscRecom,
        trMineralWater: action.payload.trMineralWater,
        trMineralWaterRecom: action.payload.trMineralWaterRecom,
        trDopMshWork: action.payload.trDopMshWork,
        trDopMshWorkRecom: action.payload.trDopMshWorkRecom,
        trDopRegime: action.payload.trDopRegime,
        trDopRegimeRecom: action.payload.trDopRegimeRecom,
        lastUpdateTime: action.payload.lastUpdateTime,
      };

    default:
      return state;
  }
};
