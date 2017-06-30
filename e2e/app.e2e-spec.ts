import { Ng4TutorialPage } from './app.po';

describe('ng4-tutorial App', () => {
  let page: Ng4TutorialPage;

  beforeEach(() => {
    page = new Ng4TutorialPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
