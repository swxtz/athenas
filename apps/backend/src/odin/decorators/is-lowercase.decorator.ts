import {
    registerDecorator,
    ValidationArguments,
    ValidationOptions,
} from "class-validator";

// Function to format the text
function formatText(text: string): string {
    return text
        .toLowerCase() // Convert all letters to lowercase
        .replace(/\d+/g, "") // Remove numbers
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/[^a-z\-]/g, ""); // Remove non-letter and non-hyphen characters
}

// Custom decorator
export function IsLowercase(validationOptions?: ValidationOptions) {
    return function (object: object, propertyName: string) {
        registerDecorator({
            name: "IsLowercase",
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            validator: {
                validate(value: any) {
                    if (typeof value !== "string") return false;
                    const formattedText = formatText(value);
                    return value === formattedText;
                },
                defaultMessage(args: ValidationArguments) {
                    return (
                        args.constraints[0] ||
                        "Text must be in lowercase, contain no numbers, and have spaces replaced by hyphens!"
                    );
                },
            },
        });
    };
}
