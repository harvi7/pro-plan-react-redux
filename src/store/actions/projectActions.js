export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // make async call to database
        const firestore = getFirestore()
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Harsh',
            authorLastName: 'Virani',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project })
        }).catch((err) => {
            dispatch({ type: 'CRE#ATE_PROJECT_ERROR', err })
        })  
    }
}