import { getContrastColor } from 'hex-a11y';

const TableCell = ({ color }: { color: string }) => {
	return (
		<td
			style={{
				backgroundColor: color,
				paddingTop: '0.5rem',
				paddingBottom: '0.5rem',
				paddingLeft: '1rem',
				paddingRight: '2rem',
				color: color && getContrastColor(color),
			}}
		>
			{color}
		</td>
	);
};

export type TableRow = {
	token: string;
	varName: string;
	wbc: string;
	stg: string;
	bom: string;
	bsa: string;
	rams: string;
};

export const PackTable = ({
	pack,
	tableData,
}: {
	pack: string;
	tableData: TableRow[];
}) => {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
			<h2>{pack}</h2>
			<table>
				<thead>
					<tr>
						<th>Token</th>
						<th>Var Name</th>
						<th>wbc</th>
						<th>stg</th>
						<th>bom</th>
						<th>bsa</th>
						<th>rams</th>
					</tr>
				</thead>
				<tbody>
					{tableData.map((row) => (
						<tr key={row.token}>
							<td style={{ width: '14rem' }}>{row.token}</td>
							<td style={{ width: '16rem', fontFamily: 'monospace' }}>
								{row.varName}
							</td>
							<TableCell color={row.wbc} />
							<TableCell color={row.stg} />
							<TableCell color={row.bom} />
							<TableCell color={row.bsa} />
							<TableCell color={row.rams} />
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};
