import { getTagVariant } from '../../components/Feature/getTagVariant';
import { Layout } from '../../components/shared/Layout';
import { Tag } from '../../components/Tag/Tag';
import { TKind } from '../../Hooks/useGetSpec';

export const Start = (): JSX.Element => {
	const kinds: TKind[] = [
		'given',
		'when',
		'then',
		'and',
		'cleanup',
		'where',
		'expect',
	];

	return (
		<Layout>
			<h1>Main Content</h1>
			{kinds.map((kind) => (
				<Tag
					text={kind.charAt(0).toUpperCase() + kind.slice(1)}
					variant={getTagVariant(kind)}
				/>
			))}
			<br />
			<br />

			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
				rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
				ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
				elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
				aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
				dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
				est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
				hendrerit in vulputate velit esse molestie consequat, vel illum dolore
				eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
				dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
				te feugait nulla facilisi. Lorem ipsum dolor sit amet,
			</p>
			<br />
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
				rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
				ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
				elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
				aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
				dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
				est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
				hendrerit in vulputate velit esse molestie consequat, vel illum dolore
				eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
				dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
				te feugait nulla facilisi. Lorem ipsum dolor sit amet,
			</p>
			<br />
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
				rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
				ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
				elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
				aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
				dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
				est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
				hendrerit in vulputate velit esse molestie consequat, vel illum dolore
				eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
				dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
				te feugait nulla facilisi. Lorem ipsum dolor sit amet,
			</p>
			<br />
			<p>
				Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
				eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
				voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
				clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
				amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
				nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
				sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
				rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
				ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
				elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
				aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
				dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus
				est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in
				hendrerit in vulputate velit esse molestie consequat, vel illum dolore
				eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
				dignissim qui blandit praesent luptatum zzril delenit augue duis dolore
				te feugait nulla facilisi. Lorem ipsum dolor sit amet,
			</p>
		</Layout>
	);
};
