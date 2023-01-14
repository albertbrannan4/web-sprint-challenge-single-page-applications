import * as yup from 'yup';

const formSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required("name is required")
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .required("size is required"),
    sauce: yup
        .string()
        .required("sauce is required"),
    specialInstructions: yup
        .string()
        .trim(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onion: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatos: yup.boolean(),
    blackOlives: yup.boolean(),
    roastedGarlic: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    extraCheese: yup.boolean(),
    pepperoni: yup.boolean(),
    pineapple: yup.boolean(),
})

export default formSchema;