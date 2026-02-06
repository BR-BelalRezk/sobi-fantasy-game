declare namespace App {
  type ID = "a" | "b";
  type TeamName = "a" | "b";
  type ServerMessages =
    | {
        event: "can_start";
        data: null;
      }
    | {
        event: "your_team";
        data: {
          team_name: TeamName;
        };
      }
    | {
        event: "can_start_speedQuestion";
        data: null;
      }
    | {
        event: "view_speed_question";
        data: {
          question: string;
          answers: { answer: string; id: number }[];
        };
      }
    | {
        event: "speed_question_answer_status";
        data: {
          correct: boolean;
        };
      }
    | {
        event: "speed_question_winner";
        data: {
          team_name: TeamName;
          won: boolean;
        };
      }
    | {
        event: "view_clubs";
        data: {
          clubs: {
            name: string;
            logo_url: string;
          }[];
        };
      }
    | {
        event: "view_all_choosen_clubs";
        data: {
          teams: {
            team: string;
            club: string;
            club_logo_url: string;
          }[];
        };
      }
    | {
        event: "view_players";
        data: {
          players: {
            id: string;
            player_img_url: string;
            score: number;
          }[];
        };
      }
    | {
        event: "winner";
        data: {
          score: number;
          club_img_url: string;
          club_name: string;
        };
      };

  type ClientMessages =
    | {
        event: "start_speed_question";
        data: null;
      }
    | {
        event: "answer_speed_question";
        data: {
          answer_id: number;
        };
      }
    | {
        event: "start_clubs_choosing";
        data: null;
      }
    | {
        event: "choose_club";
        data: {
          team_id: number;
        };
      }
    | {
        event: "start_main_questions";
        data: null;
      }
    | {
        event: "choose_player";
        data: {
          player_id: number;
        };
      }
    | {
        event: "answer_question";
        data: {
          player_id: number;
          is_flash_card_used: boolean;
          answer_id: number;
        };
      };
}

type ID = App.ID;
type ServerMessages = App.ServerMessages;
type ClientMessages = App.ClientMessages;
