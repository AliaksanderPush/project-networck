import * as ImagePicker from 'expo-image-picker';
import { FormDataProps } from '../screens/Account/Account.props';
import { IPost } from '../user/User.props';

export function formatDateTime(currTime: Date | undefined): string | null {
	if (!currTime) {
		return null;
	}
	const dt = new Date(currTime);
	return formatDate(dt);
}

function formatDate(dt: Date): string {
	const year = dt.getFullYear();
	const month = dt.getMonth() + 1;
	const day = dt.getDate();
	const hours = dt.getHours();
	const minutes = dt.getMinutes();
	const seconds = dt.getSeconds();
	return (
		str0l(day, 2) +
		'.' +
		str0l(month, 2) +
		'.' +
		year +
		' ' +
		str0l(hours, 2) +
		':' +
		str0l(minutes, 2) +
		':' +
		str0l(seconds, 2)
	);
}

function str0l(val: number, len: number): string {
	let strVal = val.toString();
	while (strVal.length < len) strVal = '0' + strVal;
	return strVal;
}

export function formatDateDay(currTime: Date): string {
	const dt = new Date(currTime);
	return formatDataDay(dt);
}

function formatDataDay(dt: Date): string {
	const year = dt.getFullYear();
	const month = dt.getMonth() + 1;
	const day = dt.getDate();

	return str0l(day, 2) + '.' + str0l(month, 2) + '.' + year;
}

export function formatDateHour(currTime: Date): string {
	const dt = new Date(currTime);
	return formatDataHour(dt);
}

function formatDataHour(dt: Date): string {
	const hours = dt.getHours();
	const minutes = dt.getMinutes();
	const seconds = dt.getSeconds();
	return str0l(hours, 2) + ':' + str0l(minutes, 2) + ':' + str0l(seconds, 2);
}

export async function createFoto(): Promise<ImagePicker.ImageInfo | void | string> {
	const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
	if (permissionResult.granted === false) {
		return alert('camera access is required');
	}
	const pickerResult = await ImagePicker.launchImageLibraryAsync({
		mediaTypes: ImagePicker.MediaTypeOptions.Images,
		allowsEditing: true,
		width: 100,
	});
	if (!!pickerResult.cancelled) {
		return;
	}
	return pickerResult.uri;
}

export function createFormdata(image: string): FormDataProps {
	const formData: FormDataProps = new FormData();
	formData.append('filedata', {
		name: 'filedata',
		uri: image,
		type: 'image/jpg',
	});
	return formData;
}

export const searchByTitle = (row: IPost['title'], searchWords: string): boolean => {
	const titleArr = row.split(' ');
	const serchWordArr = searchWords.split(' ');
	return titleArr.some((item) => serchWordArr.includes(item));
};
