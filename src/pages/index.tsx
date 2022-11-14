import Game from '@/components/Game';
import Header from '@/components/Header';

const Index = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <Header />
      <Game />
    </div>
  );
};

export default Index;
