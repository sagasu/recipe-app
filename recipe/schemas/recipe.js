export default {
    name: "recipe",
    title: "Recipe",
    type: "document",
    fields: [{
        name: "name",
        title: "Recipe Name",
        type: "string"
    },
    {
        name: "slug",
        title: "Slug",
        type: "slug",
        options: {
            sourcE: "name",
            maxLength: 96
        }
    },
    {
        name: "chef",
        title: "Chef",
        type: "reference",
        to: {
            type: "chef"
        }
    },
    {
        name: "mainImage",
        title: "Recipe main image",
        type: "image",
        options: {
            htospot: true
        }
    },
    {
        name: "ingredient",
        title: "Ingredient",
        type: "array",
        of: [
            {
                type: "object",
                fields: [
                    {
                        name: "ingredient",
                        title: "Ingredient",
                        type: "reference",
                        to: [
                            {
                                type: "ingredient"
                            }
                        ]
                    },
                    {
                        name: "wholeNumber",
                        title: "Whole Number",
                        type: "number"

                    },
                    {
                        name: "fraction",
                        title: "Fraction",
                        type: "string",
                        options: {
                            list: ["1/2", "1/3", "1/4", "3/4", "2/3"]
                        }
                    },
                    {
                        name: "unit",
                        title: "Unit",
                        type: "string",
                        options: {
                            list: ["grams", "cup", "Tbsp.", "tsp."]
                        }
                    }
                ],
                preview: {
                    select: {
                        title: "ingredient.name",
                        name: "ingredient.name",
                        media: "ingredient.image",
                        wholeNumber: "wholeNumber",
                        fraction: "fraction",
                        unit: "unit"
                    },
                    prepare({
                        title,
                        subtitle,
                        media,
                        wholeNumber = "(no number set)",
                        fraction = "(no fraction set)",
                        unit = "(no unit set)"
                    }){
                        return {
                            title,
                            subtitle: `${wholeNumber} ${fraction} ${unit}`,
                            media
                        }
                    }
                }
            }
        ]
    },
    {
        name: "instructions",
        title: "Instructions",
        type: "array",
        of: [{type: "block"}]
    }
    ],
}