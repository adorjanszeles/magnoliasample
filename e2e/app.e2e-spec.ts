import { MagnoliasamplePage } from './app.po';

describe('magnoliasample App', () => {
  let page: MagnoliasamplePage;

  beforeEach(() => {
    page = new MagnoliasamplePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
