import { WyibePage } from './app.po';

describe('wyibe App', () => {
  let page: WyibePage;

  beforeEach(() => {
    page = new WyibePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
