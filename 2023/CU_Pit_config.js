var config_data = `
{
  "title": "Scouting PASS 2023",
  "page_title": "Charged Up",
  "pitConfig": "true",
  "prematch": [
    { "name": "Team Number",
      "code": "t",
      "type": "number"
    },
    { "name": "Weight",
      "code": "wei",
      "type": "number",
      "defaultValue": "0"
    },
    { "name": "Drivetrain",
      "code": "drv",
      "type": "radio",
      "choices": {
        "s": "Swerve<br>",
        "w": "West Coast/Tank<br>",
        "b": "Butterfly/Grashopper<br>",
        "m": "Mecanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Pushes Cubes/Cones",
      "code": "pin",
      "type": "bool"
    },
    { "name": "Station Pickup",
      "code": "sin",
      "type": "bool"
    },
    { "name": "Ground Pickup (non-pushing)",
      "code": "gin",
      "type": "bool"
    },
    { "name": "Auto Cone Ground",
      "code": "acg",
      "type": "bool"
    },
    { "name": "Auto Cone Medium",
      "code": "acm",
      "type": "bool"
    },
    { "name": "Auto Cone High",
      "code": "ach",
      "type": "bool"
    },
    { "name": "Auto Cube Ground",
      "code": "aug",
      "type": "bool"
    },
    { "name": "Auto Cube Medium",
      "code": "aum",
      "type": "bool"
    },
    { "name": "Auto Cube High",
      "code": "ach",
      "type": "bool"
    },
    { "name": "Teleop Cone Ground",
      "code": "tcg",
      "type": "bool"
    },
    { "name": "Teleop Cone Medium",
      "code": "tcm",
      "type": "bool"
    },
    { "name": "Teleop Cone High",
      "code": "tch",
      "type": "bool"
    },
    { "name": "Teleop Cube Ground",
      "code": "tug",
      "type": "bool"
    },
    { "name": "Teleop Cube Medium",
      "code": "tum",
      "type": "bool"
    },
    { "name": "Teleop Cube High",
      "code": "tch",
      "type": "bool"
    },
    { "name": "Special Mechanism for End Game?",
      "code": "end",
      "type": "text",
      "size": 20,
      "maxSize": 200
    },
    { "name": "How much driver practice do you have?",
      "code": "int",
      "type": "radio",
      "choices": {
        "n": "None<br>",
        "c": "Touched the Controller<br>",
        "h": "Hour<br>",
        "l": "A lot<br>"
      },
      "defaultValue": "n"
    },
    { "name": "Notes?",
      "code": "not",
      "type": "text",
      "size": 25,
      "maxSize": 250
    }
  ],
  "auton": [
  ],
  "teleop": [
  ],
  "endgame": [
  ],
  "postmatch": [
  ]
}`;
