import './styles.css';

/* kind: GIVEN | WHEN | THEN | AND | CLEANUP | WHERE | EXPECT */

export type TTagVariant =
	| 'blue'
	| 'green'
	| 'purple'
	| 'blossom'
	| 'orange'
	| 'amber'
	| 'red'
	| 'teal'
	| 'grey';

interface ITag {
	text: string;
	variant?: TTagVariant;
}

export const Tag = (props: ITag) => {
	const { text, variant } = props;

	return (
		<div className={`tag ${variant ? `v-${variant}` : 'v-grey'}`}>{text}</div>
	);
};
