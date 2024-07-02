import React, { useState } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { Button, ButtonGroup, Container, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

export default function Chart() {
	const [data, setData] = useState([2, 5.5, 2, 8.5, 1.5, 5]);
	const [selected, setSelected] = useState("a&m");

	setTimeout(() => {
		setData([...data.slice(-15), 3]);
	}, 2000);
	return (
		<Container>
			<Typography variant="h5">Headset Readings</Typography>
			<ButtonGroup
				variant="outlined"
				aria-label="Loading button group"
				sx={{ margin: 4 }}
			>
				<LoadingButton
					onClick={() => {
						setSelected("a&m");
					}}
					loading={selected === "a&m"}
					loadingPosition="start"
					startIcon={<SaveIcon />}
				>
					Attention & Medidation
				</LoadingButton>
				<LoadingButton
					onClick={() => {
						setSelected("alpha");
					}}
					loading={selected === "alpha"}
					loadingPosition="start"
					startIcon={<SaveIcon />}
				>
					Alpha
				</LoadingButton>
				<LoadingButton
					onClick={() => {
						setSelected("beta");
					}}
					loading={selected === "beta"}
					loadingPosition="start"
					startIcon={<SaveIcon />}
				>
					Beta
				</LoadingButton>
				<LoadingButton
					onClick={() => {
						setSelected("gamma");
					}}
					loading={selected === "gamma"}
					loadingPosition="start"
					startIcon={<SaveIcon />}
				>
					Gamma
				</LoadingButton>
				<LoadingButton
					onClick={() => {
						setSelected("delta");
					}}
					loading={selected === "delta"}
					loadingPosition="start"
					startIcon={<SaveIcon />}
				>
					Delta
				</LoadingButton>
			</ButtonGroup>
			<LineChart
				// width={500}
				// xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15] }]}
				series={[
					{
						data: data,
					},
				]}
				height={560}
				margin={{ left: 30, right: 30, top: 30, bottom: 30 }}
				grid={{ vertical: true, horizontal: true }}
			/>
		</Container>
	);
}
