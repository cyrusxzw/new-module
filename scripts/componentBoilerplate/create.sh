# Permission fix: cd ./scripts/componentBoilerplate/ && chmod +x create.sh
# Argument 1 ComponentName
# Argument 2 ComponentType : ref | withoutChildren | withChildren(default)

COMPONENT=$1;
TYPE="${2:-withChildren}";
LOCATION="src/components";

if [ -z "$COMPONENT" ]; then
  echo "------------------------------------------------------------------------------------"
  echo "Creation of new component failed 😕. Please provide a Component Name as an argument."
  echo "------------------------------------------------------------------------------------"
elif [[ $TYPE != "ref" ]] && [[ $TYPE != "withChildren" ]] && [[ $TYPE != "withoutChildren" ]]; then
  echo "--------------------------------------------------------------------------"
  echo "Creation of new component failed 😕. Please provide a valid type argument."
  echo ""
  echo "Valid arguments: ref | withoutChildren | withChildren (default)"
  echo "--------------------------------------------------------------------------"
else
  if mkdir "$LOCATION/$COMPONENT"; then
    cd "scripts/componentBoilerplate";

    if [[ $TYPE = "ref" ]]; then
      cp "assets/ComponentRef.tsx" "../../$LOCATION/$COMPONENT/$COMPONENT.tsx";
      cp "assets/ComponentRef.types.ts" "../../$LOCATION/$COMPONENT/$COMPONENT.types.ts";
    else
      cp "assets/Component.tsx" "../../$LOCATION/$COMPONENT/$COMPONENT.tsx";
      cp "assets/Component.types.ts" "../../$LOCATION/$COMPONENT/$COMPONENT.types.ts";
    fi

    cp "assets/Component.module.css" "../../$LOCATION/$COMPONENT/$COMPONENT.module.css";
    cp "assets/Component.spec.tsx" "../../$LOCATION/$COMPONENT/$COMPONENT.spec.tsx";
    cp "assets/Component.stories.mdx" "../../$LOCATION/$COMPONENT/$COMPONENT.stories.mdx";
    cp "assets/Component.fixture.ts" "../../$LOCATION/$COMPONENT/$COMPONENT.fixture.ts";
    cp "assets/index.ts" "../../$LOCATION/$COMPONENT/index.ts";

    cd "../../$LOCATION/$COMPONENT/";

    sed -i "" "s/ComponentBoilerplate/$COMPONENT/g" "$COMPONENT.tsx" "$COMPONENT.types.ts" "$COMPONENT.module.css" "$COMPONENT.spec.tsx" "$COMPONENT.stories.mdx" "$COMPONENT.fixture.ts" "index.ts";

    if [[ $TYPE = "withChildren" ]]; then
      sed -i "" "s/ComponentTypeBoilerplate/ComponentWithChildren/g" "$COMPONENT.types.ts";
      sed -i "" "s/ComponentChildrenPropBoilerplate/children,/g" "$COMPONENT.tsx";
      sed -i "" "s/ComponentUIBoilerplate/<div className={classSet}>{children}<\/div>/g" "$COMPONENT.tsx";
    elif [[ $TYPE = "withoutChildren" ]]; then
      sed -i "" "s/ComponentTypeBoilerplate/ComponentWithoutChildren/g" "$COMPONENT.types.ts";
      sed -i "" "s/ComponentChildrenPropBoilerplate/ /g" "$COMPONENT.tsx";
      sed -i "" "s/ComponentUIBoilerplate/<div className={classSet} \/>/g" "$COMPONENT.tsx";
    fi

    echo "-----------------------------------------------------------------------";
    echo "New component '$COMPONENT' created! 🎉 : $LOCATION/$COMPONENT";
    echo "-----------------------------------------------------------------------";
    ls;
    echo "-----------------------------------------------------------------------";

    prettier --write "./*.{js,ts,tsx,json,md}" --loglevel "error";

  else
    echo "-----------------------------------------------------"
    echo "Creation of new component "$COMPONENT" failed 😩 "
    echo "-----------------------------------------------------"
  fi
fi
