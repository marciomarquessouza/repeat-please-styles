import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import { CloseModal, ICloseModalProps } from './';
import { findByDataTest } from '../../../../utils/testUtils';

const setup = (props: ICloseModalProps): ShallowWrapper => {
	return shallow(<CloseModal {...props} />);
};

describe('Close Modal Button', () => {
	const onCloseModal = jest.fn();
	onCloseModal.mockReturnValue('Close Modal Invoked');

	it('should render the component properly', () => {
		const wrapper = setup({ onCloseModal });
		const closeModal = findByDataTest(wrapper, 'closeModal');
		expect(closeModal).toHaveLength(1);
		expect(closeModal).toMatchSnapshot();
	});

	it('should fire the event onCloseModal', () => {
		const wrapper = setup({ onCloseModal });
		const closeModal = findByDataTest(wrapper, 'closeModalButton');
		closeModal.simulate('press');
		expect(onCloseModal).toBeCalled();
	});
});
