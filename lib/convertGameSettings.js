const convertGameSettings = (response) => {
  let newGameSettings = { ...response };
  if (response.Language === "en") {
    newGameSettings.Language = "English";
  }

  if (newGameSettings.EnvironmentUiType === "WoodEnvironmentUiType") {
    newGameSettings.EnvironmentUiType = "Woods";
  } else if (newGameSettings.EnvironmentUiType === "RandomEnvironmentUiType") {
    newGameSettings.EnvironmentUiType = "Random";
  } else if (newGameSettings.EnvironmentUiType === "FactoryEnvironmentUiType") {
    newGameSettings.EnvironmentUiType = "Factory";
  } else if (
    newGameSettings.EnvironmentUiType === "LaboratoryEnvironmentUiType"
  ) {
    newGameSettings.EnvironmentUiType = "Laboratory";
  }

  if (newGameSettings.HealthColor === "GreenToRed") {
    newGameSettings.HealthColor = "Polychrome";
  } else if (newGameSettings.HealthColor === "WhiteToRed") {
    newGameSettings.HealthColor = "Monochrome";
  }

  if (newGameSettings.HighlightScope === "All") {
    newGameSettings.HighlightScope = "Everything";
  } else if (newGameSettings.HighlightScope === "Merge") {
    newGameSettings.HighlightScope = "Mods and Stacks";
  } else if (newGameSettings.HighlightScope === "None") {
    newGameSettings.HighlightScope = "Disabled";
  }

  for (let key in newGameSettings) {
    if (newGameSettings[key] === true) {
      newGameSettings[key] = "True";
    } else if (newGameSettings[key] === false) {
      newGameSettings[key] = "False";
    } else if (newGameSettings[key] === "Never") {
      newGameSettings[key] = "Always Hidden";
    } else if (newGameSettings[key] === "Always") {
      newGameSettings[key] = "Always Shown";
    } else if (newGameSettings[key] === "InRaidOnly") {
      newGameSettings[key] = "In Raid Only";
    } else if (newGameSettings[key] === "InRaidAndInLobby") {
      newGameSettings[key] = "In Raid and Stash";
    } else if (newGameSettings[key] === "Automatic") {
      newGameSettings[key] = "Auto";
    }
  }

  return newGameSettings;
};
export default convertGameSettings;
