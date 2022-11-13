import Game from '@/components/game';
import Navbar from '@/components/navbar';
import useModal from '@/hooks/usemodal';

const Index = () => {
  return (
    <div className="flex flex-col w-screen h-screen justify-between">
      <Navbar />
      <Game />
    </div>
  );
};

export default Index;
