import {EntryButtonModel} from "./entry-button.model";

export class MockData {
  static entryButton1: EntryButtonModel = new EntryButtonModel("Test Name",
    "/assets/img/home/3-xj-02@2x.png",
    "");

  static entryButton2: EntryButtonModel = new EntryButtonModel("Test Name",
    "/assets/img/home/cindy-tang-4@2x.png",
    "");

  static entryButton3: EntryButtonModel = new EntryButtonModel("Test Name",
    "/assets/img/home/2@2x.png",
    "");

  static entryButton4: EntryButtonModel = new EntryButtonModel("Test Name",
    "/assets/img/home/rencontreseinesaintdenis-1@2x.png",
    "");

  static entryButton5: EntryButtonModel = new EntryButtonModel("Test Name",
    "/assets/img/home/structure-et-variations-0@2x.png",
    "");

  static entryButton6: EntryButtonModel = new EntryButtonModel("Test Name",
    "/assets/img/home/ambigu-10@2x.png",
    "");

  static entryButton7: EntryButtonModel = new EntryButtonModel("Test Name",
    "/assets/img/home/img-2294@2x.png",
    "");

  static entryButton8: EntryButtonModel = new EntryButtonModel("Test Name",
    "/assets/img/home/web-bel-ami-cover@2x.png",
    "");


  static entryButtonArray = [MockData.entryButton1, MockData.entryButton2, MockData.entryButton3, MockData.entryButton4,
                            MockData.entryButton5, MockData.entryButton6, MockData.entryButton7, MockData.entryButton8]
}
