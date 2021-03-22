# Permission fix: cd ./scripts/componentBoilerplate/ && chmod +x create.sh
# Argument 1 ComponentName

COMPONENT=$1
LOCATION="src/components";

if [ -z "$COMPONENT" ]; then
  echo "------------------------------------------------------------------------------------"
  echo "Creation of new component failed 😕. Please provide a Component Name as an argument."
  echo "------------------------------------------------------------------------------------"
else
  if mkdir "$LOCATION/$COMPONENT"; then
    cd "scripts/componentBoilerplate";

    cp "assets/Component.tsx" "../../$LOCATION/$COMPONENT/$COMPONENT.tsx";
    cp "assets/Component.module.css" "../../$LOCATION/$COMPONENT/$COMPONENT.module.css";
    cp "assets/Component.spec.tsx" "../../$LOCATION/$COMPONENT/$COMPONENT.spec.tsx";
    cp "assets/Component.stories.mdx" "../../$LOCATION/$COMPONENT/$COMPONENT.stories.mdx";
    cp "assets/Component.fixture.ts" "../../$LOCATION/$COMPONENT/$COMPONENT.fixture.ts";
    cp "assets/Component.types.ts" "../../$LOCATION/$COMPONENT/$COMPONENT.types.ts";
    cp "assets/index.ts" "../../$LOCATION/$COMPONENT/index.ts";

    cd "../../$LOCATION/$COMPONENT/";

    sed -i "" "s/ComponentBoilerplate/$COMPONENT/g" "$COMPONENT.tsx" "$COMPONENT.module.css" "$COMPONENT.spec.tsx" "$COMPONENT.stories.mdx" "$COMPONENT.fixture.ts" "index.ts";

    echo "-----------------------------------------------------------------------";
    echo "New component '$COMPONENT' created! 🎉 : $LOCATION/$COMPONENT";
    echo "-----------------------------------------------------------------------";
    ls;
    echo "-----------------------------------------------------------------------";

  else
    echo "-----------------------------------------------------"
    echo "Creation of new component "$COMPONENT" failed 😩"
    echo "-----------------------------------------------------"
  fi
fi
