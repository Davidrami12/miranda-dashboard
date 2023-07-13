import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import Button from "../components/styled/Buttons";

describe("Check button component", () => {
  test('Render the login button component with the correct colors', () => {
    const { getByText } = render(<Button type="login" text="LOGIN" />);

    const button = getByText('LOGIN');

    expect(button).toHaveStyleRule('background-color', '#135846');
    expect(button).toHaveStyleRule('color', '#EBF1EF');
  });
});
