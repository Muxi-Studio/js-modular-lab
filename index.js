import { runRobotAnimation } from "./src/animation";
import { goalOrientedRobot } from "./src/robot";
import VillageState from "./src/state";

runRobotAnimation(VillageState.random(), goalOrientedRobot, []);
