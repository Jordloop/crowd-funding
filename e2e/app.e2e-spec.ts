import { FundingPage } from './app.po';

describe('funding App', () => {
  let page: FundingPage;

  beforeEach(() => {
    page = new FundingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
