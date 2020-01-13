const jsonResponse = {
  content: [
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "BASIC"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "drop",
        nextAction: []
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      winDescriptions: {
        type: "WIN_DESCRIPTIONS",
        version: 1,
        winDescriptions: [
          {
            type: "SCATTER_WIN_DESC",
            version: 1,
            win: {
              type: "FREESPIN_WIN",
              version: 1,
              id: "freespins",
              data: "",
              spins: 5,
              money: {
                currency: "NOC",
                type: "UNKNOWN",
                amount: 0,
                moneyType: "UNKNOWN"
              }
            },
            symbol: {
              symbol: "Scatter"
            },
            subType: "",
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "Scatter"
                  },
                  coordinate: {
                    x: -2147483648,
                    y: -2147483648
                  }
                }
              ]
            }
          }
        ],
        totalAmountWon: 0
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          "colossal.finalPosition.x": "2",
          "colossal.finalPosition.y": "-2",
          "colossal.position.x": "2",
          "colossal.position.y": "-2",
          "colossal.size": "3",
          "colossal.symbol.name": "SYM0",
          "colossal.current.position.x": "2",
          "colossal.current.position.y": "-2"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71744,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:55.577",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "BASIC",
        action: "drop",
        bet: 100,
        win: 0
      },
      winSummary:
        "totalAmount=0; amounts=1*0; types=1*SCATTER_WIN_DESC-FREESPIN_WIN",
      reelSymbols: [
        [
          "SYM3",
          "SYM3",
          "SYM5",
          "SYM5",
          "SYM4",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM4",
          "SYM4",
          "SYM9",
          "SYM4",
          "SYM6",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM4",
          "SYM6",
          "SYM5",
          "SYM5",
          "SYM7",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM3,SYM3,SYM5,SYM5,SYM4,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM4,SYM4,SYM9,SYM4,SYM6,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM4,SYM6,SYM5,SYM5,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM3,SYM3,SYM5,SYM5,SYM4,SYM12,SYM12,SYM12,SYM16,SYM16#SYM4,SYM4,SYM9,SYM4,SYM6,SYM12,SYM12,SYM12,SYM16,SYM16#SYM4,SYM6,SYM5,SYM5,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "drop",
        nextAction: ["drop"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      winDescriptions: {
        type: "WIN_DESCRIPTIONS",
        version: 1,
        winDescriptions: [
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 400,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM3"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM3"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM3"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "5",
            direction: "LEFT_TO_RIGHT"
          }
        ],
        totalAmountWon: 400
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          "colossal.finalPosition.x": "2",
          "colossal.finalPosition.y": "1",
          "colossal.position.x": "2",
          "colossal.position.y": "0",
          "colossal.size": "2",
          "colossal.symbol.name": "SYM3",
          "colossal.current.position.x": "2",
          "colossal.current.position.y": "1",
          crushedPositions: "(3,2)"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71743,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:48.557",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "drop",
        bet: 100,
        win: 400
      },
      winSummary:
        "totalAmount=400; amounts=1*400; types=1*PATTERN_WIN_DESC-MONEY_WIN",
      reelSymbols: [
        [
          "SYM3",
          "SYM3",
          "SYM5",
          "SYM5",
          "SYM4",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM4",
          "SYM4",
          "SYM3",
          "SYM3",
          "SYM6",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM4",
          "SYM6",
          "SYM3",
          "SYM3",
          "SYM7",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM3,SYM3,SYM5,SYM5,SYM4,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM4,SYM4,SYM3,SYM3,SYM6,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM4,SYM6,SYM3,SYM3,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM3:0,SYM3:0,SYM5,SYM5,SYM4,SYM12,SYM12,SYM12,SYM16,SYM16#SYM4,SYM4,SYM3:0,SYM3,SYM6,SYM12,SYM12,SYM12,SYM16,SYM16#SYM4,SYM6,SYM3,SYM3,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "freespin",
        nextAction: ["drop"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      winDescriptions: {
        type: "WIN_DESCRIPTIONS",
        version: 1,
        winDescriptions: [
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                }
              ]
            },
            patternId: "1",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 2
                  }
                }
              ]
            },
            patternId: "2",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "5",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 2
                  }
                }
              ]
            },
            patternId: "6",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 2
                  }
                }
              ]
            },
            patternId: "7",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                }
              ]
            },
            patternId: "8",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "9",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 2
                  }
                }
              ]
            },
            patternId: "10",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 2
                  }
                }
              ]
            },
            patternId: "17",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                }
              ]
            },
            patternId: "18",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 2
                  }
                }
              ]
            },
            patternId: "19",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "0",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 2
                  }
                }
              ]
            },
            patternId: "3",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                }
              ]
            },
            patternId: "4",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                }
              ]
            },
            patternId: "11",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 2
                  }
                }
              ]
            },
            patternId: "12",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                }
              ]
            },
            patternId: "13",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                }
              ]
            },
            patternId: "14",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "15",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "16",
            direction: "LEFT_TO_RIGHT"
          }
        ],
        totalAmountWon: 365
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 171,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          "colossal.finalPosition.x": "0",
          "colossal.finalPosition.y": "0",
          "colossal.position.x": "0",
          "colossal.position.y": "0",
          "colossal.size": "3",
          "colossal.symbol.name": "SYM8",
          "colossal.current.position.x": "0",
          "colossal.current.position.y": "0"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71742,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:41.91",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "freespin",
        bet: 100,
        win: 365
      },
      winSummary:
        "totalAmount=365; amounts=11*25,9*10; types=20*PATTERN_WIN_DESC-MONEY_WIN",
      reelSymbols: [
        [
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM4",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM7",
          "SYM6",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM7",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM8,SYM8,SYM8,SYM8,SYM4,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM8,SYM8,SYM8,SYM7,SYM6,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM8,SYM8,SYM8,SYM8,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM8:028ACEI,SYM8:02569,SYM8:058DEG,SYM8:02569,SYM4,SYM12,SYM12,SYM12,SYM16,SYM16#SYM8:4567BGH,SYM8:BCDEFGHIJ,SYM8:2367BIJ,SYM7,SYM6,SYM12,SYM12,SYM12,SYM16,SYM16#SYM8:139DFJ,SYM8:13478A,SYM8:149ACFH,SYM8:13478A,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "freespin",
        nextAction: ["freespin"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 28,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 28,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 28,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 28,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 28,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          "colossal.finalPosition.x": "0",
          "colossal.finalPosition.y": "2",
          "colossal.position.x": "0",
          "colossal.position.y": "2",
          "colossal.size": "2",
          "colossal.symbol.name": "SYM8",
          "colossal.current.position.x": "0",
          "colossal.current.position.y": "2",
          freeSpinsLeft: "1"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71741,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:38.677",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "freespin",
        bet: 100,
        win: ""
      },
      winSummary: "",
      reelSymbols: [
        [
          "SYM8",
          "SYM9",
          "SYM4",
          "SYM9",
          "SYM6",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM3",
          "SYM7",
          "SYM3",
          "SYM5",
          "SYM6",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM8",
          "SYM8",
          "SYM10",
          "SYM8",
          "SYM5",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM8,SYM9,SYM4,SYM9,SYM6,SYM16,SYM16,SYM16,SYM16,SYM16,\nSYM3,SYM7,SYM3,SYM5,SYM6,SYM16,SYM16,SYM16,SYM16,SYM16,\nSYM8,SYM8,SYM10,SYM8,SYM5,SYM12,SYM12,SYM16,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM8,SYM9,SYM4,SYM9,SYM6,SYM16,SYM16,SYM16,SYM16,SYM16#SYM3,SYM7,SYM3,SYM5,SYM6,SYM16,SYM16,SYM16,SYM16,SYM16#SYM8,SYM8,SYM10,SYM8,SYM5,SYM12,SYM12,SYM16,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "drop",
        nextAction: ["freespin"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          freeSpinsLeft: "2"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71740,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:35.843",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "drop",
        bet: 100,
        win: ""
      },
      winSummary: "",
      reelSymbols: [
        [
          "SYM3",
          "SYM3",
          "SYM5",
          "SYM5",
          "SYM3",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM3",
          "SYM4",
          "SYM9",
          "SYM10",
          "SYM8",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM5",
          "SYM6",
          "SYM3",
          "SYM9",
          "SYM8",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM3,SYM3,SYM5,SYM5,SYM3,SYM12,SYM12,SYM16,SYM16,SYM16,\nSYM3,SYM4,SYM9,SYM10,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16,\nSYM5,SYM6,SYM3,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM3,SYM3,SYM5,SYM5,SYM3,SYM12,SYM12,SYM16,SYM16,SYM16#SYM3,SYM4,SYM9,SYM10,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16#SYM5,SYM6,SYM3,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "drop",
        nextAction: ["drop"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM1"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM1"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      winDescriptions: {
        type: "WIN_DESCRIPTIONS",
        version: 1,
        winDescriptions: [
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 50,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM5"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                }
              ]
            },
            patternId: "8",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM9"
                  },
                  coordinate: {
                    x: 1,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM9"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM9"
                  },
                  coordinate: {
                    x: 3,
                    y: 2
                  }
                }
              ]
            },
            patternId: "10",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM9"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "9",
            direction: "LEFT_TO_RIGHT"
          }
        ],
        totalAmountWon: 85
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          freeSpinsLeft: "2"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71739,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:29.943",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "drop",
        bet: 100,
        win: 85
      },
      winSummary:
        "totalAmount=85; amounts=1*25,1*50,1*10; types=3*PATTERN_WIN_DESC-MONEY_WIN",
      reelSymbols: [
        [
          "SYM3",
          "SYM1",
          "SYM5",
          "SYM10",
          "SYM3",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM1",
          "SYM6",
          "SYM9",
          "SYM9",
          "SYM8",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM5",
          "SYM9",
          "SYM3",
          "SYM9",
          "SYM8",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM3,SYM1,SYM5,SYM10,SYM3,SYM12,SYM12,SYM16,SYM16,SYM16,\nSYM1,SYM6,SYM9,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16,\nSYM5,SYM9,SYM3,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM3,SYM1:02,SYM5:0,SYM10,SYM3,SYM12,SYM12,SYM16,SYM16,SYM16#SYM1:012,SYM6,SYM9:12,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16#SYM5,SYM9:1,SYM3,SYM9:1,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "freespin",
        nextAction: ["drop"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM1"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM1"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      winDescriptions: {
        type: "WIN_DESCRIPTIONS",
        version: 1,
        winDescriptions: [
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 50,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM5"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                }
              ]
            },
            patternId: "1",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 50,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM5"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM5"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                }
              ]
            },
            patternId: "8",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 10,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM1"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM9"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "5",
            direction: "LEFT_TO_RIGHT"
          }
        ],
        totalAmountWon: 110
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 11,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          "colossal.finalPosition.x": "0",
          "colossal.finalPosition.y": "-1",
          "colossal.position.x": "0",
          "colossal.position.y": "-1",
          "colossal.size": "2",
          "colossal.symbol.name": "SYM1",
          "colossal.current.position.x": "0",
          "colossal.current.position.y": "-1",
          freeSpinsLeft: "2"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71738,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:23.72",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "freespin",
        bet: 100,
        win: 110
      },
      winSummary:
        "totalAmount=110; amounts=2*50,1*10; types=3*PATTERN_WIN_DESC-MONEY_WIN",
      reelSymbols: [
        [
          "SYM1",
          "SYM1",
          "SYM5",
          "SYM10",
          "SYM3",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM5",
          "SYM6",
          "SYM9",
          "SYM9",
          "SYM8",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM5",
          "SYM9",
          "SYM3",
          "SYM9",
          "SYM8",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM1,SYM1,SYM5,SYM10,SYM3,SYM12,SYM12,SYM16,SYM16,SYM16,\nSYM5,SYM6,SYM9,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16,\nSYM5,SYM9,SYM3,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM1:02,SYM1:012,SYM5:01,SYM10,SYM3,SYM12,SYM12,SYM16,SYM16,SYM16#SYM5:1,SYM6,SYM9:2,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16#SYM5,SYM9,SYM3,SYM9,SYM8,SYM16,SYM16,SYM16,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "freespin",
        nextAction: ["freespin"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM6"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 86,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 86,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 86,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 86,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 86,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          "colossal.finalPosition.x": "3",
          "colossal.finalPosition.y": "-1",
          "colossal.position.x": "3",
          "colossal.position.y": "-1",
          "colossal.size": "2",
          "colossal.symbol.name": "SYM5",
          "colossal.current.position.x": "3",
          "colossal.current.position.y": "-1",
          freeSpinsLeft: "3"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71737,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:20.68",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "freespin",
        bet: 100,
        win: ""
      },
      winSummary: "",
      reelSymbols: [
        [
          "SYM9",
          "SYM10",
          "SYM3",
          "SYM5",
          "SYM5",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM12",
          "SYM12"
        ],
        [
          "SYM7",
          "SYM10",
          "SYM3",
          "SYM6",
          "SYM10",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM7",
          "SYM6",
          "SYM4",
          "SYM3",
          "SYM3",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM9,SYM10,SYM3,SYM5,SYM5,SYM16,SYM16,SYM16,SYM12,SYM12,\nSYM7,SYM10,SYM3,SYM6,SYM10,SYM16,SYM16,SYM16,SYM16,SYM16,\nSYM7,SYM6,SYM4,SYM3,SYM3,SYM16,SYM16,SYM16,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM9,SYM10,SYM3,SYM5,SYM5,SYM16,SYM16,SYM16,SYM12,SYM12#SYM7,SYM10,SYM3,SYM6,SYM10,SYM16,SYM16,SYM16,SYM16,SYM16#SYM7,SYM6,SYM4,SYM3,SYM3,SYM16,SYM16,SYM16,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "drop",
        nextAction: ["freespin"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM3"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM4"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          freeSpinsLeft: "4"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71736,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:17.793",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "drop",
        bet: 100,
        win: ""
      },
      winSummary: "",
      reelSymbols: [
        [
          "SYM3",
          "SYM3",
          "SYM5",
          "SYM5",
          "SYM5",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM4",
          "SYM4",
          "SYM9",
          "SYM4",
          "SYM7",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM4",
          "SYM10",
          "SYM9",
          "SYM10",
          "SYM5",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM3,SYM3,SYM5,SYM5,SYM5,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM4,SYM4,SYM9,SYM4,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM4,SYM10,SYM9,SYM10,SYM5,SYM16,SYM16,SYM16,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM3,SYM3,SYM5,SYM5,SYM5,SYM12,SYM12,SYM12,SYM16,SYM16#SYM4,SYM4,SYM9,SYM4,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16#SYM4,SYM10,SYM9,SYM10,SYM5,SYM16,SYM16,SYM16,SYM16,SYM16#",
      serverId: "asgardianstones"
    },
    {
      state: {
        type: "STATE",
        version: 1,
        ingoingState: "FREESPIN",
        outgoingState: "FREESPIN"
      },
      action: {
        type: "ACTION",
        version: 1,
        action: "freespin",
        nextAction: ["drop"]
      },
      bet: {
        type: "BET",
        version: 1,
        betLevel: 1,
        denomination: 5,
        betAmount: {
          currency: "EUR",
          type: "UNKNOWN",
          amount: 100,
          moneyType: "UNKNOWN"
        },
        fromBalance: false
      },
      matrices: {
        type: "MATRICES",
        version: 1,
        matrices: [
          {
            type: "MATRIX",
            version: 1,
            cells: [
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 0,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 0,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 0,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 1,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 1,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 1,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 2,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 2,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM9"
                },
                coordinate: {
                  x: 2,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 3,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 3,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM10"
                },
                coordinate: {
                  x: 3,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM8"
                },
                coordinate: {
                  x: 4,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM7"
                },
                coordinate: {
                  x: 4,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM5"
                },
                coordinate: {
                  x: 4,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 5,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 5,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 6,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 6,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM12"
                },
                coordinate: {
                  x: 7,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 7,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 8,
                  y: 2
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 0
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 1
                }
              },
              {
                symbol: {
                  symbol: "SYM16"
                },
                coordinate: {
                  x: 9,
                  y: 2
                }
              }
            ],
            width: 10,
            height: 3
          }
        ],
        height: 3,
        width: 10,
        layerCount: 1
      },
      winDescriptions: {
        type: "WIN_DESCRIPTIONS",
        version: 1,
        winDescriptions: [
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 150,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 4,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                }
              ]
            },
            patternId: "1",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 150,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 4,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "5",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 150,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 4,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 1
                  }
                }
              ]
            },
            patternId: "11",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 150,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 4,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "15",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "0",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 1
                  }
                }
              ]
            },
            patternId: "4",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                }
              ]
            },
            patternId: "8",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "9",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 0
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 1
                  }
                }
              ]
            },
            patternId: "13",
            direction: "LEFT_TO_RIGHT"
          },
          {
            type: "PATTERN_WIN_DESC",
            version: 1,
            win: {
              type: "MONEY_WIN",
              version: 1,
              money: {
                currency: "EUR",
                type: "UNKNOWN",
                amount: 25,
                moneyType: "UNKNOWN"
              },
              winCount: 1
            },
            pattern: {
              cells: [
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 1,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 0,
                    y: 2
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 3,
                    y: 1
                  }
                },
                {
                  symbol: {
                    symbol: "SYM8"
                  },
                  coordinate: {
                    x: 2,
                    y: 1
                  }
                }
              ]
            },
            patternId: "16",
            direction: "LEFT_TO_RIGHT"
          }
        ],
        totalAmountWon: 750
      },
      misc: [],
      reels: {
        type: "REELS",
        version: 1,
        reels: [
          {
            id: 0,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 0,
              y: 0
            }
          },
          {
            id: 1,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 1,
              y: 0
            }
          },
          {
            id: 2,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 2,
              y: 0
            }
          },
          {
            id: 3,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 3,
              y: 0
            }
          },
          {
            id: 4,
            numberOfVisibleCells: 3,
            reelPosition: 0,
            matrixPositionOfTopVisibleCell: {
              x: 4,
              y: 0
            }
          },
          {
            id: 5,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 5,
              y: 0
            }
          },
          {
            id: 6,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 6,
              y: 0
            }
          },
          {
            id: 7,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 7,
              y: 0
            }
          },
          {
            id: 8,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 8,
              y: 0
            }
          },
          {
            id: 9,
            numberOfVisibleCells: 3,
            reelPosition: 172,
            matrixPositionOfTopVisibleCell: {
              x: 9,
              y: 0
            }
          }
        ],
        reelSetId: "freespin"
      },
      feature: [],
      gameVariables: {
        type: "GAME_VARIABLES",
        version: 1,
        keysAndValues: {
          "colossal.finalPosition.x": "0",
          "colossal.finalPosition.y": "-1",
          "colossal.position.x": "0",
          "colossal.position.y": "-1",
          "colossal.size": "3",
          "colossal.symbol.name": "SYM8",
          "colossal.current.position.x": "0",
          "colossal.current.position.y": "-1",
          freeSpinsLeft: "4"
        }
      },
      otherAspects: [],
      roundDetails: {
        gameTrackingId: 71735,
        gameRoundId: 56014,
        dateOccurred: "2018-12-12T13:08:09.783",
        gameRoundEndDate: "2018-12-12T13:08:55.573"
      },
      shortSummary: {
        outState: "FREESPIN",
        action: "freespin",
        bet: 100,
        win: 750
      },
      winSummary:
        "totalAmount=750; amounts=6*25,4*150; types=10*PATTERN_WIN_DESC-MONEY_WIN",
      reelSymbols: [
        [
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM8",
          "SYM7",
          "SYM12",
          "SYM12",
          "SYM12",
          "SYM16",
          "SYM16"
        ],
        [
          "SYM8",
          "SYM10",
          "SYM9",
          "SYM10",
          "SYM5",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16",
          "SYM16"
        ]
      ],
      effectiveMatrixByRow:
        "SYM8,SYM8,SYM8,SYM8,SYM8,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM8,SYM8,SYM8,SYM8,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16,\nSYM8,SYM10,SYM9,SYM10,SYM5,SYM16,SYM16,SYM16,SYM16,SYM16,",
      detailedMatrixWithWinsByRow:
        "SYM8:0123,SYM8:0167,SYM8:02568,SYM8:0167,SYM8:0123,SYM12,SYM12,SYM12,SYM16,SYM16#SYM8:4678,SYM8:234589,SYM8:13479,SYM8:234589,SYM7,SYM12,SYM12,SYM12,SYM16,SYM16#SYM8:59,SYM10,SYM9,SYM10,SYM5,SYM16,SYM16,SYM16,SYM16,SYM16#",
      serverId: "asgardianstones"
    }
  ]
};

export { jsonResponse };
