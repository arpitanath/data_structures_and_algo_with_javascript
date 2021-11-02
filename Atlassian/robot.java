
// We have a robot that can pick up blocks from a stash, move them horizontally, and lower them in place. There are 10 positions available to lower blocks, numbered from 0 to 9. Each position can hold up to 15 blocks.

// [Two diagrams with the hexidecimal axis of x-axis [0-9], and y-axis [1-F] and arbitrary placement of blocks in diagram]

// The robot understands the commands 'P', 'M' and 'L':
// P: Pickup from the stash and move to position 0
// M: Move to the next position
// L: Lower the block

// The robot is safe to operate and very forgiving:
// • There are always blocks in the stash (Pickup will always get a block).
// • If the robot already holds a block, Pickup will reset the robot to position 0.
// • The robot will not go beyond position 9. Trying to Move it further does nothing.
// • Lowering a block on a pile of 15 blocks does nothing (and the robot will keep any block it holds).
// • Lowering without a block does nothing.
// • The robot ignores any command that is not 'P', 'M' or 'L'

// Implement a function that takes a [String] of commands for the robot. The function should output a [String] representing the number of blocks (in hexadecimal) at each position after running all the commands.

private static int[] stash = new int[10];
private static HashMap<Integer, String> map = new HashMap<Integer, String>();
public static void main(String[] args) {
    map.put(10, "A");
    map.put(11, "B");
    map.put(12, "C");
    map.put(13, "D");
    map.put(14, "E");
    map.put(15, "F");

    String command = "PMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMLPMMMLPMLPMMLPMMMMMMMMMMLPMMMMMMMMMML";
    executeCommand(command);
}

private static void executeCommand(String command) {
    int block = 0;
    int stashLocation = 0;
    for (Character c : command.toCharArray()) {
        switch (c) {
            case 'P':
                if (block == 0) {
                    block = 1;
                } else {
                    stashLocation = 0;
                }
                break;
            case 'M':
                if (stashLocation < 9) {
                    stashLocation++;
                }
                break;
            case 'L':
                if (block != 0 && stash[stashLocation] < 15) {
                    stash[stashLocation] = stash[stashLocation] + 1;
                    block = 0;
                    stashLocation = 0;
                }
                break;
        }
    }
    Arrays.stream(stash).forEach(val -> {
        if (map.containsKey(val)) {
            System.out.print(map.get(val));
        } else {
            System.out.print(val);
        }
    });
}