interface FormDataValue {
	uri: string;
	name: string;
	type: string;
}

export interface FormData {
	append(name: string, value: string | Blob | FormDataValue, fileName?: string): void;
	delete(name: string): void;
	get(name: string): FormDataEntryValue | null;
	getAll(name: string): FormDataEntryValue[];
	has(name: string): boolean;
	set(name: string, value: string | Blob | FormDataValue, fileName?: string): void;
}
