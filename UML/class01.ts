// クラス作成01
class Employee {
  // カプセル化された属性
  private id: number;
  private name: string;
  private salary: number;

  // 公開メソッド。「働く」 -> 振る舞い。
  work() {
    console.log("働きます");
  }

  //  継承先だけが使えるアクセサ（クラス自身とサブクラスからのみ）
  protected getSalary(): number {
    // そのEmployeeオブジェクトのsalary
    return this.salary;
  }

  //  継承先だけが使えるアクセサ（クラス自身とサブクラスからのみ）
  protected setSalary(salary: number) {
    this.salary = salary;
  }
}
