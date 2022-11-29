import createIds from "./lib/createIds";
import createSpec from "./lib/createSpec";

function createProjectId(): string {
    return createIds(false);
}

function createUserId(): string {
    return createIds(true);
}

function createSpecificLength(value: number): string {
    return createSpec(value);
}

export { createProjectId, createUserId, createSpecificLength };
