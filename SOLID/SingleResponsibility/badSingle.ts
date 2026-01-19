// npx tsx badSingle.ts　で実行

export {};

class Employee {
  constructor(
    public name: string,
    public department: string,
  ) {}

  // 経理部門アクター
  calculatePay() {
    this.getRegularHours();
    console.log(`${this.name}の給与を計算した`);
  }

  // 人事部門アクター
  reportHours() {
    this.getRegularHours();
    console.log(`${this.name}の労働時間を記録した`);
  }

  //データベース管理者アクター
  save() {
    console.log(`${this.name}を保存`);
  }

  // 両方に影響でてしまうやばい関数
  private getRegularHours() {
    console.log("経理部門と人事部門の共通ロジック");
  }
}

function run() {
  const emp = new Employee("山田", "開発");

  console.log("");
  console.log("経理部門");
  emp.calculatePay();

  console.log("");
  console.log("人事部門");
  emp.reportHours();
}

run();
