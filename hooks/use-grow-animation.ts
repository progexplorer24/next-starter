import { useCycle } from "framer-motion";

type GrowAnimation = {
  onTap: () => void;
  animate: {
    scale: number;
  };
  transition: {
    duration: number;
  };
};

const useGrowAnimation = (duration = 0.5, scale = 2): GrowAnimation => {
  const [grow, cycle] = useCycle(1, scale);

  // onTap={}
  //     animate={}
  //     transition={}
  return {
    onTap: () => cycle(),
    animate: { scale: grow },
    transition: { duration },
  };
};

export default useGrowAnimation;
