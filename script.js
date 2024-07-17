let dataJson;

// inisialisasi untuk columnChooser 
const columnChooserModes = [{
	key: 'dragAndDrop',
	name: 'Drag and drop',
}, {
	key: 'select',
	name: 'Select',
}];

// inisialisasi table
const table = $('#table').dxDataGrid({
	dataSource: dataJson,
	// selection: {
	// 	mode: 'single',
	// },
	allowColumnResizing: true,
	columnResizingMode: 'widget',
	columnAutoWidth: true,
	showRowLines: true,
	hoverStateEnabled: true,
	searchPanel: {
		visible: true,
		width: 240,
		placeholder: 'Search...',
	},
	filterRow: {
		visible: true,
	},
	headerFilter: {
		visible: true,
	},
	filterPanel: {
		visible: true
	},
	filterBuilder: {
		allowHierarchicalFields: true,
	},
	pager: {
		showInfo: true,
		showNavigationButtons: true,
		showPageSizeSelector: true,
		visible: true,
	},
	paging: {
		pageSize: 10
	},
	allowColumnReordering: true,
	scrolling: {
		useNative: true,
	},
	onCellPrepared: function (e) {
		if (e.rowType === "data" && e.column.dataField === e.row.data.Cluster && e.row.data.Cluster) {
			e.cellElement.css("backgroundColor", '#02a656'); //set the background color based on the data
		}
	},
	columns: [
		{
			caption: 'No',
			alignment: 'center',
			fixed: true,
			width: 50,
			cellTemplate: function (cellElement, cellInfo) {
				cellElement.text(cellInfo.row.loadIndex + 1)
			}
		},
		{
			dataField: 'track_id',
		},
		{
			dataField: 'track_name',
		},
		{
			dataField: 'track_artist',
		},
		{
			dataField: 'track_popularity',
		},
		{
			dataField: 'track_album_name',
		},
		{
			dataField: 'track_album_release_date',
			dataType: 'date',
			format: 'dd/MM/yyyy'
		},
		{
			dataField: 'playlist_name',
		},
		{
			dataField: 'playlist_id',
		},
		{
			dataField: 'playlist_genre',
		},
		{
			dataField: 'playlist_subgenre',
		},
		{
			dataField: 'danceability',
			dataType: 'number',
		},
		{
			dataField: 'energy',
			dataType: 'number',
		},
		{
			dataField: 'key',
			dataType: 'number',
		},
		{
			dataField: 'loudness',
			dataType: 'number',
		},
		{
			dataField: 'mode',
			dataType: 'number',
		},
		{
			dataField: 'speechiness',
			dataType: 'number',
		},
		{
			dataField: 'acousticness',
			dataType: 'number',
		},
		{
			dataField: 'instrumentalness',
			dataType: 'number',
		},
		{
			dataField: 'liveness',
			dataType: 'number',
		},
		{
			dataField: 'valence',
			dataType: 'number',
		},
		{
			dataField: 'tempo',
			dataType: 'number',
		},
		{
			dataField: 'duration_ms',
			dataType: 'number',
		},
	],
	columnChooser: {
		enabled: true,
		mode: columnChooserModes[1].key,
		position: {
			my: 'right top',
			at: 'right bottom',
			of: '.dx-datagrid-column-chooser-button',
		},
		search: {
			enabled: true,
			editorOptions: {
				placeholder: 'Search column'
			},
		},
		selection: {
			recursive: true,
			selectByClick: true,
			allowSelectAll: true,
		},
	},
	showBorders: true,
}).dxDataGrid('instance');

const tableCentroid = $('#tableCentroid').dxDataGrid({
	dataSource: dataJson,
	// selection: {
	// 	mode: 'single',
	// },
	allowColumnResizing: true,
	columnResizingMode: 'widget',
	columnAutoWidth: true,
	showRowLines: true,
	hoverStateEnabled: true,
	searchPanel: {
		visible: true,
		width: 240,
		placeholder: 'Search...',
	},
	filterRow: {
		visible: true,
	},
	headerFilter: {
		visible: true,
	},
	filterPanel: {
		visible: true
	},
	filterBuilder: {
		allowHierarchicalFields: true,
	},
	pager: {
		showInfo: true,
		showNavigationButtons: true,
		showPageSizeSelector: true,
		visible: true,
	},
	paging: {
		pageSize: 10
	},
	allowColumnReordering: true,
	scrolling: {
		useNative: true,
	},
	columns: [
		{
			caption: 'No',
			alignment: 'center',
			fixed: true,
			width: 50,
			cellTemplate: function (cellElement, cellInfo) {
				cellElement.text(cellInfo.row.loadIndex + 1)
			}
		},
		{
			dataField: 'track_id',
		},
		{
			dataField: 'track_name',
		},
		{
			dataField: 'track_artist',
		},
		{
			dataField: 'track_popularity',
		},
		{
			dataField: 'track_album_name',
		},
		{
			dataField: 'track_album_release_date',
			dataType: 'date',
			format: 'dd/MM/yyyy'
		},
		{
			dataField: 'playlist_name',
		},
		{
			dataField: 'playlist_id',
		},
		{
			dataField: 'playlist_genre',
		},
		{
			dataField: 'playlist_subgenre',
		},
		{
			dataField: 'danceability',
			dataType: 'number',
		},
		{
			dataField: 'energy',
			dataType: 'number',
		},
		{
			dataField: 'key',
			dataType: 'number',
		},
		{
			dataField: 'loudness',
			dataType: 'number',
		},
		{
			dataField: 'mode',
			dataType: 'number',
		},
		{
			dataField: 'speechiness',
			dataType: 'number',
		},
		{
			dataField: 'acousticness',
			dataType: 'number',
		},
		{
			dataField: 'instrumentalness',
			dataType: 'number',
		},
		{
			dataField: 'liveness',
			dataType: 'number',
		},
		{
			dataField: 'valence',
			dataType: 'number',
		},
		{
			dataField: 'tempo',
			dataType: 'number',
		},
		{
			dataField: 'duration_ms',
			dataType: 'number',
		},
	],
	columnChooser: {
		enabled: true,
		mode: columnChooserModes[1].key,
		position: {
			my: 'right top',
			at: 'right bottom',
			of: '.dx-datagrid-column-chooser-button',
		},
		search: {
			enabled: true,
			editorOptions: {
				placeholder: 'Search column'
			},
		},
		selection: {
			recursive: true,
			selectByClick: true,
			allowSelectAll: true,
		},
	},
	showBorders: true,
}).dxDataGrid('instance');

// const newCentroid = $('#tableNewCentroid').dxDataGrid({
// 	dataSource: dataJson,
// 	// selection: {
// 	// 	mode: 'single',
// 	// },
// 	allowColumnResizing: true,
// 	columnResizingMode: 'widget',
// 	columnAutoWidth: true,
// 	showRowLines: true,
// 	hoverStateEnabled: true,
// 	searchPanel: {
// 		visible: true,
// 		width: 240,
// 		placeholder: 'Search...',
// 	},
// 	filterRow: {
// 		visible: true,
// 	},
// 	headerFilter: {
// 		visible: true,
// 	},
// 	filterPanel: {
// 		visible: true
// 	},
// 	filterBuilder: {
// 		allowHierarchicalFields: true,
// 	},
// 	pager: {
// 		showInfo: true,
// 		showNavigationButtons: true,
// 		showPageSizeSelector: true,
// 		visible: true,
// 	},
// 	paging: {
// 		pageSize: 10
// 	},
// 	allowColumnReordering: true,
// 	scrolling: {
// 		useNative: true,
// 	},
// 	columns: [
// 		{
// 			caption: 'No',
// 			alignment: 'center',
// 			fixed: true,
// 			width: 50,
// 			cellTemplate: function (cellElement, cellInfo) {
// 				cellElement.text(cellInfo.row.loadIndex + 1)
// 			}
// 		},
// 		{
// 			dataField: 'track_id',
// 		},
// 		{
// 			dataField: 'track_name',
// 		},
// 		{
// 			dataField: 'track_artist',
// 		},
// 		{
// 			dataField: 'track_popularity',
// 		},
// 		{
// 			dataField: 'track_album_name',
// 		},
// 		{
// 			dataField: 'track_album_release_date',
// 			dataType: 'date',
// 			format: 'dd/MM/yyyy'
// 		},
// 		{
// 			dataField: 'playlist_name',
// 		},
// 		{
// 			dataField: 'playlist_id',
// 		},
// 		{
// 			dataField: 'playlist_genre',
// 		},
// 		{
// 			dataField: 'playlist_subgenre',
// 		},
// 		{
// 			dataField: 'danceability',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'energy',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'key',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'loudness',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'mode',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'speechiness',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'acousticness',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'instrumentalness',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'liveness',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'valence',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'tempo',
// 			dataType: 'number',
// 		},
// 		{
// 			dataField: 'duration_ms',
// 			dataType: 'number',
// 		},
// 	],
// 	columnChooser: {
// 		enabled: true,
// 		mode: columnChooserModes[1].key,
// 		position: {
// 			my: 'right top',
// 			at: 'right bottom',
// 			of: '.dx-datagrid-column-chooser-button',
// 		},
// 		search: {
// 			enabled: true,
// 			editorOptions: {
// 				placeholder: 'Search column'
// 			},
// 		},
// 		selection: {
// 			recursive: true,
// 			selectByClick: true,
// 			allowSelectAll: true,
// 		},
// 	},
// 	showBorders: true,
// }).dxDataGrid('instance');

Papa.parse('./spotify.csv', {
	header: true,
	download: true,
	complete: function (results) {
		dataJson = results.data;

		table.option('dataSource', results.data);
		table.refresh();
	}
});

async function getData() {
	const res = await fetch("./spotify.json");
	const data = await res.json();
	console.log(data);
	dataJson = data;

	table.option('dataSource', data);
	table.refresh();
}
getData();


$('#btnSubmit').on('click', function () {
	let total_k = $('#total_k').val();

	// Hapus semua kolom C dan cluster sebelumnya dari belakang
	// Karna jika dari depan saat menghapus index akan berubah
	for (let i = table.columnCount() - 1; i >= 0; i--) {
		if (i > 21) {
			console.log(`delete column: ${i}`);
			table.deleteColumn(i);
		}
	}

	// Menentukan centroid secara random
	let centroids = [];
	for (let i = 1; i <= total_k; i++) {
		table.addColumn({
			dataField: `C${i}`,
			cellTemplate: function (cellElement, cellInfo) {
				cellElement.css('background-color', '#87ffa9');
				cellElement.text(cellInfo.value);
			}
		});

		// generate random int 0 - dataJson.length (32k++)
		let rndInt = Math.floor(Math.random() * dataJson.length) + 0;

		centroids.push(dataJson[rndInt]);
	}

	tableCentroid.option('dataSource', centroids);
	tableCentroid.refresh();
	$('#centroidContainer').removeClass('d-none');
	// $('#newCentroidContainer').removeClass('d-none');

	table.deleteColumn(`Cluster`);
	table.addColumn({
		dataField: 'Cluster',
		cellTemplate: function (cellElement, cellInfo) {
			cellElement.css('background-color', '#87ffa9');
			cellElement.text(cellInfo.value);
		}
	});

	// Menghitung distance tiap centroid
	let distances = [];
	centroids.forEach(centroid => {
		let arr = [
			centroid.danceability,
			centroid.energy,
			centroid.loudness,
			centroid.speechiness,
			centroid.acousticness,
			centroid.instrumentalness,
			centroid.liveness,
			centroid.valence,
			centroid.tempo,
		];

		distances.push(CalDist(arr, dataJson));
	});

	// Menambahkan kolom baru ke dataJson untuk menyimpan distance dan cluster
	dataJson.forEach((dataPoint, index) => {
		// Menambahkan kolom C1,C2...
		distances.forEach((distanceArray, centroidIndex) => {
			dataPoint['C' + (centroidIndex + 1)] = distanceArray[index];
		});

		// Cari distance paling kecil
		let minDistance = Infinity;
		let closestCluster = null;

		for (let j = 1; j <= total_k; j++) {
			let distance = dataPoint['C' + j];
			if (distance < minDistance) {
				minDistance = distance;
				closestCluster = 'C' + j;
			}
		}

		dataPoint['Cluster'] = closestCluster;
	});

	// Mengupdate dataSource DataGrid
	table.option('dataSource', dataJson);
	table.refresh();
});

//function calcalute Distance
function CalDist(arr, data) {
	var distance = []
	for (var i = 0; i < data.length; i++) {
		distance[i] = Math.round(Math.sqrt(
			(data[i].danceability - arr[0]) ** 2 +
			(data[i].energy - arr[1]) ** 2 +
			(data[i].loudness - arr[2]) ** 2 +
			(data[i].speechiness - arr[3]) ** 2 +
			(data[i].acousticness - arr[4]) ** 2 +
			(data[i].instrumentalness - arr[5]) ** 2 +
			(data[i].liveness - arr[6]) ** 2 +
			(data[i].valence - arr[7]) ** 2 +
			(data[i].tempo - arr[8]) ** 2) * 100) / 100;
	}

	return distance;
}
