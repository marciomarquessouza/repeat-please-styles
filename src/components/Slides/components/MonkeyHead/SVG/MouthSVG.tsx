import * as React from "react";
import { Path } from "react-native-svg";

export const Mouth = {
	sad: (
		<Path
			d="M86 240.247s45.695-35.888 100.46-7.004"
			stroke="#000"
			strokeWidth={6}
		/>
	),
	curious: [(
		<Path
			key={0}
			d="M135.176 230.63a2.817 2.817 0 002.819-2.815 2.817 2.817 0 00-2.819-2.815 2.817 2.817 0 00-2.819 2.815 2.817 2.817 0 002.819 2.815z"
			fill="#000"
			stroke="#000"
			strokeWidth={12}
			strokeLinecap="round"
		/>), (
		<Path
			key={1}
			d="M127 236.724c.709 1.743 2.14 3.165 4.039 4.014 1.898.849 4.141 1.069 6.329.622 2.188-.447 4.179-1.533 5.62-3.064 1.44-1.532 2.236-3.409 2.245-5.299"
			stroke="#000"
			strokeWidth={3}
			strokeLinecap="round"
		/>
	)],
	happy: (
		<Path
			d="M187 230c-13.833 10.5-49.4 25.2-81 0"
			stroke="#000"
			strokeWidth={6}
      	/>
	)
};