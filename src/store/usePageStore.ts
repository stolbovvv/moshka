import { Resource } from '@/libs/definitions';
import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface State {
	popupFrame: { isOpen: boolean };
	popupLeave: { isOpen: boolean };
	popupResource: { isOpen: boolean; data: Resource };
}

interface Actions {
	openPopupFrame: () => void;
	closePopupFrame: () => void;
	openPopupLeave: () => void;
	closePopupLeave: () => void;
	openPopupResource: (data: Resource) => void;
	closePopupResource: () => void;
}

const initialState: State = {
	popupFrame: {
		isOpen: false,
	},
	popupLeave: {
		isOpen: false,
	},
	popupResource: {
		isOpen: false,
		data: {
			id: '',
			thumb: '',
			title: '',
			author: {
				name: '',
				photo: '',
				role: '',
				text: '',
			},
			duration: '',
			complexity: '',
			tags: [],
			price: '',
			category: '',
			description: '',
			properties: [],
			program: [],
			posters: [],
			categoryId: '',
			categoryName: '',
			head_description: '',
		},
	},
};

export const usePageStore = create<State & Actions>()(
	immer((set) => ({
		...initialState,

		openPopupFrame: () => {
			set((state) => {
				state.popupFrame.isOpen = true;
			});
		},
		closePopupFrame: () => {
			set((state) => {
				state.popupFrame.isOpen = false;
			});
		},

		openPopupLeave: () => {
			set((state) => {
				state.popupLeave.isOpen = true;
			});
		},
		closePopupLeave: () => {
			set((state) => {
				state.popupLeave.isOpen = false;
			});
		},

		openPopupResource: (data) => {
			set((state) => {
				state.popupResource.data = data;
				state.popupResource.isOpen = true;
			});
		},
		closePopupResource: () => {
			set((state) => {
				state.popupResource.data = initialState.popupResource.data;
				state.popupResource.isOpen = false;
			});
		},
	})),
);
