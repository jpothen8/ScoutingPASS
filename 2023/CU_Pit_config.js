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
    { "name": "Intake Capabilities",
      "code": "int",
      "type": "radio",
      "choices": {
        "g": "Ground<br>",
        "s": "Station<br>",
        "p": "Push<br>"
      },
      "defaultValue": "g"
    },
    { "name": "What can they score (AUTO)?",
      "code": "sca",
      "type": "bool",
      "choices": {
        "cg": "Cone Ground<br>",
        "cm": "Cone Middle<br>",
        "ch": "Cone High<br>",
        "ug": "Cube Ground<br>",
        "um": "Cube Middle<br>",
        "uh": "Cube High<br>"
      },
      "defaultValue": "cg"
    },
    { "name": "What can they score (TELEOP)?",
      "code": "sct",
      "type": "bool",
      "choices": {
        "cg": "Cone Ground<br>",
        "cm": "Cone Middle<br>",
        "ch": "Cone High<br>",
        "ug": "Cube Ground<br>",
        "um": "Cube Middle<br>",
        "uh": "Cube High<br>"
      },
      "defaultValue": "cg"
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
