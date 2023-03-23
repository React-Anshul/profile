import apiConfig from "src/ApiConfig/ApiConfig";
import axios from "axios";

export const getParticulatManagementDataList = async (endPoint) => {
  try {
    const res = await axios({
      method: "GET",
      url: apiConfig[endPoint],
      headers: {
        token: window.sessionStorage.getItem("token"),
      },
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    }
  } catch (error) {
    console.log(error);
  }
};
export const getUserDataList = async (endPoint) => {
  try {
    const res = await axios({
      method: "GET",
      url: apiConfig[endPoint],
      headers: {
        token: window.sessionStorage.getItem("token"),
      },
    });
    if (res.data.responseCode === 200) {
      return res.data.result.docs;
    }
  } catch (error) {
    console.log(error);
  }
};

export const updateParticularMangement = async (endPoint, dataToSend) => {
  try {
    const credentials =
      endPoint === "updateTournament"
        ? {
            tournamentId: dataToSend.tournamentId,
            roundTime: dataToSend.values.roundTime,
            // pairCreationStartTime: dataToSend.values.pairCreationStartTime,
            roundGapTime: dataToSend.values.roundGapTime,
            entryFee: dataToSend.values.entryFee,
            spinFee: dataToSend.values.spinFee,
            boostFee: dataToSend.values.boostFee,
            pricePool: dataToSend.values.pricePool,
          }
        : {
            ascascasc: "",
          };

    const res = await axios({
      method: "PUT",
      url: apiConfig[endPoint],
      headers: {
        token: window.sessionStorage.getItem("token"),
      },
      data: credentials,
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    }
  } catch (error) {
    console.log(error);
  }
};

export const viewParticularHandeler = async (endPoint, _id) => {
  try {
    const res = await axios({
      method: "GET",
      url: apiConfig[endPoint] + _id,
      headers: {
        token: window.sessionStorage.getItem("token"),
      },
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    }
  } catch (error) {
    console.log(error);
  }
};

export const blockHandler = async (endPoint, dataToSend, _id) => {
  const credentials =
    endPoint === "blockUnblockUser"
      ? {
          _id: dataToSend._id,
          status: dataToSend.status,
        }
      : {
          abx: "xyz",
        };
  try {
    const res = await axios({
      method: "PATCH",
      url: apiConfig[endPoint],
      headers: {
        token: window.sessionStorage.getItem("token"),
      },
      data: credentials,
    });
    if (res.data.responseCode === 200) {
      return res.data.result;
    }
  } catch (error) {
    console.log(error);
  }
};
