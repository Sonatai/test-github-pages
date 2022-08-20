import { nanoid } from 'nanoid';
import { Fragment } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { TKind } from '../../Hooks/useGetSpec';

import { Tag } from '../Tag/Tag';
import { getTagVariant } from './getTagVariant';

/*
className === unique key for spec
executedFeatures === unique key for test
feature.id === unique key for test
kind: GIVEN | WHEN | THEN | AND | CLEANUP | WHERE | EXPECT
#ff3f81
*/

export interface IBlock {
	kind: string;
	text: string;
	code: string[];
}

export interface IFeature {
	id: string;
	blocks: IBlock[];
}

export const Feature = (props: IFeature): JSX.Element => {
	const { id, blocks } = props;

	return (
		<section id={id}>
			<h3>
				<a href={`#${id}`}>{id}</a>
			</h3>
			<div>
				{blocks.map((block) => (
					<div key={nanoid()} className='mb-6'>
						<div className='flex items-baseline'>
							<Tag
								text={block.kind.charAt(0).toUpperCase() + block.kind.slice(1)}
								variant={getTagVariant(block.kind as TKind)}
							/>

							<div className='ml-[0.5rem] text-lg'>{block.text || '----'}</div>
						</div>
						{block.code.length > 0 && (
							<SyntaxHighlighter
								language='groovy'
								style={dracula}
								showLineNumbers>
								{block.code.join('\n')}
							</SyntaxHighlighter>
						)}
					</div>
				))}
			</div>
		</section>
	);
};
