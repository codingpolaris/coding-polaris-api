class Configs {
  public host = process.env.HOST;
  public port = process.env.PORT;
  public user = process.env.USER;
  public password = process.env.PASSWORD;
}

export default new Configs();
