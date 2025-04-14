import { Button } from "@/components/ui/Button";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-10">
      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">포커 퀴즈</h1>
        <p className="text-lg text-gray-600">
          포커 게임 학습을 위한 인터랙티브 퀴즈 애플리케이션입니다.
        </p>
      </header>

      <section className="max-w-xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">시작하기</h2>
        <p className="mb-6">퀴즈를 시작하고 포커 실력을 향상시켜보세요.</p>
        <div className="flex gap-4">
          <Button variant="primary" size="lg">
            퀴즈 시작하기
          </Button>
          <Button variant="outline" size="lg">
            포커 규칙 보기
          </Button>
        </div>
      </section>
    </div>
  );
}
