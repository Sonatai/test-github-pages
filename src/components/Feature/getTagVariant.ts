import { TKind } from '../../Hooks/useGetSpec';
import { TTagVariant } from '../Tag/Tag';

export const getTagVariant = (kind: TKind): TTagVariant => {
	switch (kind) {
		case 'and':
			return 'blossom';
		case 'cleanup':
			return 'teal';
		case 'expect':
			return 'green';
		case 'given':
			return 'purple';
		case 'then':
			return 'amber';

		case 'when':
			return 'blue';
		case 'where':
			return 'orange';
		default:
			return 'green';
	}
};
