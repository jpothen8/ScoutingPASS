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
        "m": "Mechanum<br>",
        "o": "Other"
      },
      "defaultValue": "o"
    },
    { "name": "Other Drivetrain (if selected)",
      "code": "odt",
      "type": "text",
      "size": 20,
      "maxSize": 50
    },
    { "name": "Floor pickup Cones",
      "code": "fco",
      "type": "bool"
    },
    { "name": "Floor pickup Cubes",
      "code": "fcu",
      "type": "bool"
    },
    { "name": "Cross Charging Station",
      "code": "ccs",
      "type": "bool"
    },
    { "name": "Intake Mechanism (don't select push unless they can only push",
      "code": "int",
      "type": "radio"
      "choices": {
        "g": "Ground<br>",
        "s": "Station<br>",
        "p": "Push<br>"
      }
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
        "c": "Touched the Controlle<br>",
        "h": "Hour<br>",
        "l": "A lot<br>"
    },
    { "name": "Notes?",
      "code": "not",
      "type": "text",
      "size": 20,
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
