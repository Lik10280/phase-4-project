'use strict';var _docsUrl = require('../docsUrl');var _docsUrl2 = _interopRequireDefault(_docsUrl);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { 'default': obj };}

module.exports = {
  meta: {
    type: 'suggestion',
    docs: {
      category: 'Style guide',
      description: 'Forbid named exports.',
      url: (0, _docsUrl2['default'])('no-named-export') },

    schema: [] },


  create: function () {function create(context) {
      // ignore non-modules
      if (context.parserOptions.sourceType !== 'module') {
        return {};
      }

      var message = 'Named exports are not allowed.';

      return {
        ExportAllDeclaration: function () {function ExportAllDeclaration(node) {
            context.report({ node: node, message: message });
          }return ExportAllDeclaration;}(),

        ExportNamedDeclaration: function () {function ExportNamedDeclaration(node) {
            if (node.specifiers.length === 0) {
              return context.report({ node: node, message: message });
            }

            var someNamed = node.specifiers.some(function (specifier) {return (specifier.exported.name || specifier.exported.value) !== 'default';});
            if (someNamed) {
              context.report({ node: node, message: message });
            }
          }return ExportNamedDeclaration;}() };

    }return create;}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlcy9uby1uYW1lZC1leHBvcnQuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyIsIm1ldGEiLCJ0eXBlIiwiZG9jcyIsImNhdGVnb3J5IiwiZGVzY3JpcHRpb24iLCJ1cmwiLCJzY2hlbWEiLCJjcmVhdGUiLCJjb250ZXh0IiwicGFyc2VyT3B0aW9ucyIsInNvdXJjZVR5cGUiLCJtZXNzYWdlIiwiRXhwb3J0QWxsRGVjbGFyYXRpb24iLCJub2RlIiwicmVwb3J0IiwiRXhwb3J0TmFtZWREZWNsYXJhdGlvbiIsInNwZWNpZmllcnMiLCJsZW5ndGgiLCJzb21lTmFtZWQiLCJzb21lIiwic3BlY2lmaWVyIiwiZXhwb3J0ZWQiLCJuYW1lIiwidmFsdWUiXSwibWFwcGluZ3MiOiJhQUFBLHFDOztBQUVBQSxPQUFPQyxPQUFQLEdBQWlCO0FBQ2ZDLFFBQU07QUFDSkMsVUFBTSxZQURGO0FBRUpDLFVBQU07QUFDSkMsZ0JBQVUsYUFETjtBQUVKQyxtQkFBYSx1QkFGVDtBQUdKQyxXQUFLLDBCQUFRLGlCQUFSLENBSEQsRUFGRjs7QUFPSkMsWUFBUSxFQVBKLEVBRFM7OztBQVdmQyxRQVhlLCtCQVdSQyxPQVhRLEVBV0M7QUFDZDtBQUNBLFVBQUlBLFFBQVFDLGFBQVIsQ0FBc0JDLFVBQXRCLEtBQXFDLFFBQXpDLEVBQW1EO0FBQ2pELGVBQU8sRUFBUDtBQUNEOztBQUVELFVBQU1DLFVBQVUsZ0NBQWhCOztBQUVBLGFBQU87QUFDTEMsNEJBREssNkNBQ2dCQyxJQURoQixFQUNzQjtBQUN6Qkwsb0JBQVFNLE1BQVIsQ0FBZSxFQUFFRCxVQUFGLEVBQVFGLGdCQUFSLEVBQWY7QUFDRCxXQUhJOztBQUtMSSw4QkFMSywrQ0FLa0JGLElBTGxCLEVBS3dCO0FBQzNCLGdCQUFJQSxLQUFLRyxVQUFMLENBQWdCQyxNQUFoQixLQUEyQixDQUEvQixFQUFrQztBQUNoQyxxQkFBT1QsUUFBUU0sTUFBUixDQUFlLEVBQUVELFVBQUYsRUFBUUYsZ0JBQVIsRUFBZixDQUFQO0FBQ0Q7O0FBRUQsZ0JBQU1PLFlBQVlMLEtBQUtHLFVBQUwsQ0FBZ0JHLElBQWhCLENBQXFCLDZCQUFhLENBQUNDLFVBQVVDLFFBQVYsQ0FBbUJDLElBQW5CLElBQTJCRixVQUFVQyxRQUFWLENBQW1CRSxLQUEvQyxNQUEwRCxTQUF2RSxFQUFyQixDQUFsQjtBQUNBLGdCQUFJTCxTQUFKLEVBQWU7QUFDYlYsc0JBQVFNLE1BQVIsQ0FBZSxFQUFFRCxVQUFGLEVBQVFGLGdCQUFSLEVBQWY7QUFDRDtBQUNGLFdBZEksbUNBQVA7O0FBZ0JELEtBbkNjLG1CQUFqQiIsImZpbGUiOiJuby1uYW1lZC1leHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZG9jc1VybCBmcm9tICcuLi9kb2NzVXJsJztcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIG1ldGE6IHtcbiAgICB0eXBlOiAnc3VnZ2VzdGlvbicsXG4gICAgZG9jczoge1xuICAgICAgY2F0ZWdvcnk6ICdTdHlsZSBndWlkZScsXG4gICAgICBkZXNjcmlwdGlvbjogJ0ZvcmJpZCBuYW1lZCBleHBvcnRzLicsXG4gICAgICB1cmw6IGRvY3NVcmwoJ25vLW5hbWVkLWV4cG9ydCcpLFxuICAgIH0sXG4gICAgc2NoZW1hOiBbXSxcbiAgfSxcblxuICBjcmVhdGUoY29udGV4dCkge1xuICAgIC8vIGlnbm9yZSBub24tbW9kdWxlc1xuICAgIGlmIChjb250ZXh0LnBhcnNlck9wdGlvbnMuc291cmNlVHlwZSAhPT0gJ21vZHVsZScpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG5cbiAgICBjb25zdCBtZXNzYWdlID0gJ05hbWVkIGV4cG9ydHMgYXJlIG5vdCBhbGxvd2VkLic7XG5cbiAgICByZXR1cm4ge1xuICAgICAgRXhwb3J0QWxsRGVjbGFyYXRpb24obm9kZSkge1xuICAgICAgICBjb250ZXh0LnJlcG9ydCh7IG5vZGUsIG1lc3NhZ2UgfSk7XG4gICAgICB9LFxuXG4gICAgICBFeHBvcnROYW1lZERlY2xhcmF0aW9uKG5vZGUpIHtcbiAgICAgICAgaWYgKG5vZGUuc3BlY2lmaWVycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gY29udGV4dC5yZXBvcnQoeyBub2RlLCBtZXNzYWdlIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc29tZU5hbWVkID0gbm9kZS5zcGVjaWZpZXJzLnNvbWUoc3BlY2lmaWVyID0+IChzcGVjaWZpZXIuZXhwb3J0ZWQubmFtZSB8fCBzcGVjaWZpZXIuZXhwb3J0ZWQudmFsdWUpICE9PSAnZGVmYXVsdCcpO1xuICAgICAgICBpZiAoc29tZU5hbWVkKSB7XG4gICAgICAgICAgY29udGV4dC5yZXBvcnQoeyBub2RlLCBtZXNzYWdlIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgIH07XG4gIH0sXG59O1xuIl19