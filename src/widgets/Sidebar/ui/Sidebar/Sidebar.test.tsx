import { Sidebar } from 'widgets/Sidebar/index'
import { fireEvent, screen } from '@testing-library/react'
import { withTranslation } from 'react-i18next'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'
describe('Sidebar', () => {
    const SidebarWithTranslation = withTranslation()(Sidebar)
    test('render', () => {
        renderWithTranslation(<SidebarWithTranslation />)
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
    })
    test('toggle', () => {
        renderWithTranslation(<SidebarWithTranslation />)
        const toggleBtn = screen.getByTestId('toggle-button')
        expect(screen.getByTestId('sidebar')).toBeInTheDocument()
        fireEvent.click(toggleBtn)
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
        screen.debug
    })
})
