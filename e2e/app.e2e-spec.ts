import { ProclistPage } from './app.po';

describe('proclist App', () => {
  let page: ProclistPage;

  beforeEach(() => {
    page = new ProclistPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
