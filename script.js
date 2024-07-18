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
	dataSource: [],
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

// Table untuk centroid
const tableCentroid = $('#tableCentroid').dxDataGrid({
	dataSource: [],
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

// Parse data csv menjadi json menggunakan library papa parse
Papa.parse('./spotify.csv', {
	header: true,
	download: true,
	complete: function (results) {
		dataJson = results.data;

		table.option('dataSource', results.data);
		table.refresh();
	}
});


// Event ketika btnSubmit di klik
$('#btnSubmit').on('click', function () {
	let total_k = $('#total_k').val();

	// Hapus semua kolom C dan cluster sebelumnya dari belakang
	// Karna jika dari depan saat menghapus index akan berubah
	for (let i = table.columnCount() - 1; i >= 0; i--) {
		if (i > 22) {
			table.deleteColumn(i);
		}
	}

	// Menentukan centroid secara random
	let centroids = [];

	for (let j = 1; j <= total_k; j++) {
		table.addColumn({
			dataField: `C${j}`,
			cellTemplate: function (cellElement, cellInfo) {
				cellElement.css('background-color', '#87ffa9');
				cellElement.text(cellInfo.value);
			}
		});

		// generate random int 0 - dataJson.length (32k++)
		let rndInt = Math.floor(Math.random() * dataJson.length) + 0;

		centroids.push(dataJson[rndInt]);
	}

	// Memasukkan variable centroids kedalam tableCentroid
	tableCentroid.option('dataSource', centroids);
	tableCentroid.refresh();
	$('#centroidContainer').removeClass('d-none');

	// Delete column cluster
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

	function updateDataCluster() {
		distances = [];
		centroids.forEach(centroid => {
			let arr = [
				centroid.danceability,
				centroid.energy,
				centroid.key,
				centroid.loudness,
				centroid.mode,
				centroid.speechiness,
				centroid.acousticness,
				centroid.instrumentalness,
				centroid.liveness,
				centroid.valence,
				centroid.tempo,
				centroid.duration_ms,
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

		// Mengupdate dataSource table
		table.option('dataSource', dataJson);
		table.refresh();
	}
	// Jalankan function updateDataCluster
	updateDataCluster()

	let oldGroupingData = {};
	let newGroupingData = {};

	let loop = 0;
	while (true) {
		console.log(`iterasi ke ${++loop}`)

		// grouping data lama berdasarkan cluster, ex: C1,C2..
		for (let k = 1; k <= total_k; k++) {
			oldGroupingData['C' + k] = dataJson.filter(item => item.Cluster === 'C' + k);
		}

		// menampilkan centroid lama / sebelum diubah
		console.log('sebelum', centroids);

		// menghitung centroid baru
		for (let l = 0; l < total_k; l++) {
			let old_group_data = oldGroupingData['C' + (l + 1)];
			let total_data_old = old_group_data.length;
			centroids[l] = {
				danceability: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.danceability), 0)),
				energy: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.energy), 0)),
				key: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.key), 0)),
				loudness: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.loudness), 0)),
				mode: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.mode), 0)),
				speechiness: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.speechiness), 0)),
				acousticness: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.acousticness), 0)),
				instrumentalness: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.instrumentalness), 0)),
				liveness: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.liveness), 0)),
				valence: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.valence), 0)),
				tempo: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.tempo), 0)),
				duration_ms: (1 / total_data_old) * (old_group_data.reduce((sum, item) => sum + parseFloat(item.duration_ms), 0)),
			}
		}

		// menampilkan centroid baru / sesudah diubah
		console.log('sesudah', centroids);
		updateDataCluster()

		// grouping data baru / sudah diubah berdasarkan cluster, ex: C1,C2..
		for (let m = 1; m <= total_k; m++) {
			newGroupingData['C' + m] = dataJson.filter(item => item.Cluster === 'C' + m);
		}

		// Menampilkan data lama dan data baru
		console.log('Old group Data', oldGroupingData);
		console.log('new group Data', newGroupingData);

		// Membandingkan data lama dengan data baru
		if (compareAllClusters(oldGroupingData, newGroupingData, total_k)) {
			console.log(compareAllClusters(oldGroupingData, newGroupingData, total_k))
			// Jika data lama dan data baru sama maka keluar dari iterasi
			break;
		}
		// Jika berbeda lanjutkan iterasi
	}
});

//function calcalute Distance
function CalDist(arr, data) {
	var distance = []
	for (var i = 0; i < data.length; i++) {
		distance[i] = Math.round(Math.sqrt(
			(data[i].danceability - arr[0]) ** 2 +
			(data[i].energy - arr[1]) ** 2 +
			(data[i].key - arr[2]) ** 2 +
			(data[i].loudness - arr[3]) ** 2 +
			(data[i].mode - arr[4]) ** 2 +
			(data[i].speechiness - arr[5]) ** 2 +
			(data[i].acousticness - arr[6]) ** 2 +
			(data[i].instrumentalness - arr[7]) ** 2 +
			(data[i].liveness - arr[8]) ** 2 +
			(data[i].valence - arr[9]) ** 2 +
			(data[i].tempo - arr[10]) ** 2 +
			(data[i].duration_ms - arr[11]) ** 2
		) * 100) / 100;
	}

	return distance;
}

// Fungsi untuk membandingkan dua array berdasarkan track_id
function compareTrackIds(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false; // Jika panjang array berbeda, pasti ada perbedaan
	}

	// Urutkan kedua array berdasarkan track_id
	const sortedArr1 = arr1.slice().sort((a, b) => a.track_id - b.track_id);
	const sortedArr2 = arr2.slice().sort((a, b) => a.track_id - b.track_id);

	// Bandingkan track_id dari kedua array
	for (let i = 0; i < sortedArr1.length; i++) {
		if (sortedArr1[i].track_id !== sortedArr2[i].track_id) {
			return false; // Jika ada track_id yang berbeda, kembalikan false
		}
	}

	return true; // Jika semua track_id sama, kembalikan true
}

// Fungsi untuk membandingkan semua cluster berdasarkan total_k
function compareAllClusters(oldData, newData, totalK) {
	for (let k = 1; k <= totalK; k++) {
		const clusterKey = 'C' + k;
		if (!compareTrackIds(oldData[clusterKey], newData[clusterKey])) {
			return false; // Jika ada perbedaan pada satu cluster, kembalikan false
		}
	}
	return true; // Jika semua cluster sama, kembalikan true
}