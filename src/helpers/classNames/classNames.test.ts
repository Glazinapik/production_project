import { classNames } from './classNames'

describe('classNames', () => {
    test('with one param', () => {
        expect(classNames('someClass')).toBe('someClass')
    })
    test('with additional classes', () => {
        expect(classNames('someClass', {}, ['secondClass', 'thirdClass'])).toBe(
            'someClass secondClass thirdClass'
        )
    })
    test('with mods', () => {
        expect(
            classNames('someClass', { hovered: true }, [
                'secondClass',
                'thirdClass',
            ])
        ).toBe('someClass secondClass thirdClass hovered')
    })
    test('with mod false', () => {
        expect(
            classNames('someClass', { hovered: false }, [
                'secondClass',
                'thirdClass',
            ])
        ).toBe('someClass secondClass thirdClass')
    })
    test('with mod undefiend', () => {
        expect(
            classNames('someClass', { hovered: undefined }, [
                'secondClass',
                'thirdClass',
            ])
        ).toBe('someClass secondClass thirdClass')
    })
})
