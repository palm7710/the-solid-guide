export {};

// 従業員の職位
type Grade = "junior" | "middle" | "senior";

class Employee {
  // constructor: クラスのインスタンスが作られるときに自動で呼ばれる初期化用のメソッド（ほぼinit）
  constructor(
    public name: string,
    public grade: Grade,
  ) {}
}

class BonusCalculator {
  // constructor: クラスのインスタンスが作られるときに自動で呼ばれる初期化用のメソッド（ほぼinit）
  constructor(public base: number) {}

  // Math.floor: 「小数点以下を切り捨てて、最も近い小さい"整数"にする」関数
  getBonus(employee: Employee): number {
    // 新たなグレードを追加するには、すでに安定して動いているGETボーナスメソッドに手を加える必要があり
    // 分岐の処理でケアレスミスをするなどバグが発生するリスクを高める
    if (employee.grade === "junior") {
      return Math.floor(this.base * 1.1);
    } else if (employee.grade === "middle") {
      return Math.floor(this.base * 1.5);
    } else {
      return Math.floor(this.base * 2);
    }
  }
}

function run() {
  // インスタンス生成
  const emp1 = new Employee("Yamada", "junior");
  const emp2 = new Employee("Suzuki", "middle");
  const emp3 = new Employee("Tanaka", "senior");

  // クラスの新しいインスタンスを作って、100 をコンストラクタ引数として渡している
  const bonusCalculator = new BonusCalculator(100);

  console.log(bonusCalculator.getBonus(emp1));
  console.log(bonusCalculator.getBonus(emp2));
  console.log(bonusCalculator.getBonus(emp3));
}

run();
