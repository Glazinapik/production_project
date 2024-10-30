import { Button, ThemeButton } from 'shared/ui/Button/Button'
import { render, screen } from '@testing-library/react'
describe('Button', () => {
    test('test render', () => {
        render(<Button>test</Button>)
        expect(screen.getByText('test')).toBeInTheDocument()
    })
    test('test theme', () => {
        render(<Button theme={ThemeButton.CLEAR}>test</Button>)
        expect(screen.getByText('test')).toHaveClass('clear')
    })
})
