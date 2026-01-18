// クラス作成02

// 図形の共通仕様
interface Shape {
  calcArea(): number; // calcArea()を持つことを要求
}

// 長方形。widthとheightを持つ。
class Rectangle implements Shape {
  private width: number;
  private height: number;

  // 面積を width * height で計算。
  calcArea(): number {
    return this.width * this.height;
  }
}

// 円。radiusを持つ。
class Circle implements Shape {
  private radius: number;

  // 面積を r^2 * π で計算。
  calcArea(): number {
    return this.radius * this.radius * Math.PI;
  }
}

// Shape型だけに依存する利用側。
class Client {
  private shape: Shape;
}
